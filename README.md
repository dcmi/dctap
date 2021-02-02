
# DC Tabular Application Profile

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

## Primary documents

* [TAP Primer](TAPprimer.md)
* [TAP Vocabulary](TAPvocabulary.md)
* [Tabular template](TAPtemplate.csv) (in CSV format)

### Group Information
1. [Working group space](https://github.com/dcmi/dcap/blob/master/README.md) (Includes [meeting minutes](https://github.com/dcmi/dcap/tree/master/meetings))
1. [Group charter](http://www.dublincore.org/groups/application_profiles_ig/)
1. [Email list information](https://lists.dublincore.org/mailman/listinfo/application-profiles-ig)
1. [Email list archive](https://lists.dublincore.org/pipermail/application-profiles-ig/)



