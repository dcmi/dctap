
# DC Tabular Application Profiles

## Primary documents

* [DCTAP Primer](https://dcmi.github.io/dctap/TAPprimer.html): The best starting point for understanding DCTAP. With just the primer you should be able to create your first DCTAP.
* [DCTAP Elements](https://dcmi.github.io/dctap/TAPelements.html): A basic list of elements with their definitions.
* [Framework for Talking About Metadata and Application Profiles](https://dcmi.github.io/dctap/talking\_about\_metadata.html): If you experience any confusion about the terminology used in the project, see this document.
* [DCTAP Cookbook](https://dcmi.github.io/dctap/DCTAP-Cookbook.html): Examples of extensions and other complex uses of DCTAP. The Cookbook is and will remain a work in progress.
* [Presentations](https://github.com/dcmi/dctap/tree/main/media) and [examples](https://github.com/dcmi/dctap/tree/main/examples) in the github repository. 

## Introduction

The concept of the <em>(metadata) application profile</em> is important for DCMI and the Dublin Core community. It has underpinned many of DCMI's development efforts in recent years. There is significant community interest in developing tools to aid in creating and documenting application profiles. There is a related interest in assuring that profiles specify validation rules for the data that they define.  

Previous work in the Dublin Core community defined a [framework](/specifications/dublin-core/singapore-framework/) for application profiles and a [constraint language](http://www.dublincore.org/specifications/dublin-core/dc-dsp/) based on the [Dublin Core Abstract Model](http://www.dublincore.org/specifications/dublin-core/abstract-model/). This current work will use some of the concepts developed previously but will not be bound to those specifications.

## A Core Vocabulary for Profiles

The idea behind this project is that there is a growing need to develop vocabularies for the creation of data and metadata. The goal of interoperability among data stores encourages the reuse of existing vocabularies for this purpose, and thus to create local profiles that can be understood as widely as possible. Some developers of applications work with complex platforms for data creation and validation. However, metadata is used by nearly every information technology function, from the simple web page to an institutional database, and many people involved in those functions are developing their metadata without the aid of complex and often expensive technology nor the use of professional data developers. This project aims to provide a simple core vocabulary that allows the reuse of elements defined in the public sphere of the web, and to assign basic constraints to those elements; a core vocabulary as simple to understand and use as Dublin Core, but with a different set of outcomes.

## Tabular Friendly

Many communities express their metadata profiles as tables, either in document form or using a spreadsheet program. For this reason we decided to constrain the vocabulary to those profile functions that are compatible with a tabular format. The result is a vocabulary that can define basic definitions and rules that adhere to the two-dimensionality of a table, with the limitations that imposes.

Note that the vocabulary can be used independently of any tabular format, and should be extended as needed.

## Comma Separated Values

There is a standard for [Comma Separated Values](https://tools.ietf.org/html/rfc4180) (CSV) that is offered as output from most spreadsheet programs. There are other possible outputs, such as tab separated values, but CSV is the primary standard. Most programming environments have available functions for the processing of CSV files. For this reason we also have worked to assure that the TAP vocabulary is consistent with the rules for CSV. There is no requirement that tabular profiles must be exported to CSV for processing, although we expect that this common format will be used in many cases.

# Implementations

## Projects
### dc-srap
[Scholarly Resources Application Profile](https://github.com/dcmi/dc-srap/tree/main) (dc-srap) is a proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile ([SWAP12](http://www.ukoln.ac.uk/repositories/digirep/index/Scholarly_Works_Application_Profile)), which was developed by UKOLN with JISC funding in 2006, and b) [Finnish metadata guidelines for text documents in institutional repositories3](https://www.kiwi.fi/display/Julkaisuarkistopalvelut/Metadatasuositus+julkaisuarkistojen+tekstiaineistolle) (available only in Finnish).

## Software

### dctap-python
* [github repo](https://github.com/dcmi/dctap-python)
* [documentation](https://dctap-python.readthedocs.io/en/latest/)

The program dctap-python reads the TAP in CSV format and outputs the data in the TAP as text, JSON, or YAML. It does some checking of the content of the TAP and issues warnings for unexpected values, but it passes through all content to the output format. It allows configuration of the TAP, including the addition of columns to the TAP.

### TAP2SHACL
* [github repo](https://github.com/philbarker/TAP2SHACL)
* [Google sheets template](https://docs.google.com/spreadsheets/d/1A1l2ouF07yXWpHzeA6d6j9FRmXIxrcPsRCEbTvgTNKQ/edit?usp=sharing)
* [Google sheets github repo](https://github.com/philbarker/DCTAPTemplateForGoogleSheets) (For raising issues.)

The python program builds on dctap-python to create a SHACL representation of the application profile. In order to do this more information is required than can be provided in a standard TAP, and so the Google sheets template includes a separate sheet for shapes allows additional information to be coded relating to SHACL shapes and sheets for administrative information as well as namespaces used and drop-down sets of allowed values.

There is [an example](https://docs.google.com/spreadsheets/d/1UkYPGkRo9pcxQYZG9E460pMg_WjKAoJO-Z6gwQXXl6M/edit?usp=sharing) of the sheets required for the Simple Book AP similar to the one in the Primer.

### Group Information
1. [Working group space](https://github.com/dcmi/dcap/blob/master/README.md) (Includes [meeting minutes](https://github.com/dcmi/dcap/tree/master/meetings))
1. [Group charter](http://www.dublincore.org/groups/application_profiles_ig/)
1. [Email list information](https://lists.dublincore.org/mailman/listinfo/application-profiles-ig)
1. [Email list archive](https://lists.dublincore.org/pipermail/application-profiles-ig/)
