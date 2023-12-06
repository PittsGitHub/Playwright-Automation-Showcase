import { test, expect } from 'playwright/test'
const REPO = 'test-repo-1'
const USER = 'PittsGitHub'

test.beforeAll(async ({ request }) => {
  // Create a new repository
  const response = await request.post('/user/repos', {
    data: {
      name: REPO,
    },
  })
  expect(response.ok()).toBeTruthy()
})

test.afterAll(async ({ request }) => {
  // Delete the repository
  const response = await request.delete(`/repos/${USER}/${REPO}`)
  expect(response.ok()).toBeTruthy()
})

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Bug] report 1',
      body: 'Bug description',
    },
  })
  expect(newIssue.ok()).toBeTruthy()

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`)
  expect(issues.ok()).toBeTruthy()
  expect(await issues.json()).toContainEqual(
    expect.objectContaining({
      title: '[Bug] report 1',
      body: 'Bug description',
    })
  )
})

test('should create a feature request', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Feature] request 1',
      body: 'Feature description',
    },
  })
  expect(newIssue.ok()).toBeTruthy()

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`)
  expect(issues.ok()).toBeTruthy()
  expect(await issues.json()).toContainEqual(
    expect.objectContaining({
      title: '[Feature] request 1',
      body: 'Feature description',
    })
  )
})
