---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/v/1.0/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adaptors' may be used to translate an existing API to the patterns described here. This section also provides guidance on how candidate products are tested and how GovStack validates a product's API against the API specifications defined here.

The tests for the Registration Building Block can be found in [this GitHub repository](https://github.com/GovStackWorkingGroup/bb-registration/tree/main/test/openAPI).

## 8.1 Online Registration e-services

The available services (i.e. registration processes) and form definitions within such a service can be accessed:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}/eForms" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}/eForms" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/eForms/{eFormId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

### 8.1.2 Generic Registration Steps

Going through the registration process as an applicant requires multiple steps available via API endpoints:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}/applications" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/services/{serviceId}/applications" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/documents" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.2 Processing of Registrations

Operators can access and process existing application files:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/applications" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/applications/{fileId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/applications/{fileId}" method="put" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/documents" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/tasks" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/tasks/{taskId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json" path="/tasks/{taskId}/complete" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.3 Development Platform

Currently there are no specifications for API endpoints to manage and design services and workflows.

### Statistics

The statistics API gives Building Block operational statistics, that reference the number of processed applications (per operator, registration, service, date):

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API_statistics.json" path="/data/statistics/1.0" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API_statistics.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/04fe789c8ef82106f7699007d765ea5474f90ea4/api/GovStack_Registration_BB_API_statistics.json)
{% endswagger %}
