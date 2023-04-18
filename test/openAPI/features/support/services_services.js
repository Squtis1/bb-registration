const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  servicesEndpoint,
  defaultExpectedResponseTime,
  servicesResponseSchema,
  localhost,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + servicesEndpoint;
const endpointTag = { tags: `@endpoint=/${servicesEndpoint}` };

Before(endpointTag, () => {
  specServices = spec();
});

// Scenario: Retrieve the list of services smoke type test
Given(
  'User wants to retrieve the list of services',
  () => 'User wants to retrieve the list of services'
);

When('User sends GET \\/statistics request with no optional parameter', () =>
  specServices.withPath(baseUrl)
);

Then(
  'The response from the \\/statistics endpoint is received',
  async () => await specServices.toss()
);

Then(
  'The \\/statistics response should be returned in a timely manner 15000ms',
  () =>
    specServices
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then('The \\/statistics response should have status 200', () =>
  specServices.response().to.have.status(200)
);

Then('The \\/statistics response should match empty array', () =>
  chai.expect(specServices._response.json).to.be.jsonSchema([])
);

// Scenario Outline: Retrieve the list of services that match the name provided in optional parameter
// Given and others Then for this scenario are written in the aforementioned example
When('User sends GET \\/statistics request with given {string} as name', name =>
  specServices.withPath(baseUrl).withQueryParams('name', name)
);

Then('The \\/statistics response should match json schema', () =>
  chai
    .expect(specServices._response.json)
    .to.be.jsonSchema(servicesResponseSchema)
);

Then(
  'The service name in response match provided {string} as name parameter',
  name => specServices.response().should.have.bodyContains('name', name)
);

After(endpointTag, () => {
  specServices.end();
});
