# Implementing DC TAP

**Status**: Draft in progress
**Date**: November 29, 2021

## Introduction

The DC TAP model is purposely designed to be a simple core for application profiles in tabular form. Although the TAP can be used as is, many implementations of TAP will require extensions to the model. This document addresses some implementation options as examples of use of a profile that has been initially defined in TAP. TAP is an actionable document, but it is primarily a documentation of an application profile. In many cases, make use of the TAP will require some additional information that is needed for implementation of the profile.

## Application profiles

Some statement here about the relationship between APs and base vocabularies

## From table to code

One usually works with tables in a spreadsheet program like MS Excel or Open Office or a document editing program that supports tables. To be actionalable a TAP needs to be saved in a format that can be processed by program code. For the TAP we recommend that the table be saved in a standard comma-separated format, such as [CSV](https://datatracker.ietf.org/doc/html/rfc4180). Other storage forms exist for tabular data, such as tab-separated values, which is widely recognized by programming languages. The important point is to store the TAP in a machine-actionable format so that it can be directly used by programs implementing the profile.

## Administrative metadata

* providing administrative metadata about the TAP (creators, versions, etc.)

* providing information that is needed to make use of the TAP, such as namespace prefixes, default values
* configuration information that can be used by programs to extend the basic TAP model (such as additional columns) or that can localize the TAP model with translations of headers and terms

It is best to think of TAP as a basic core that can be extended or molded to meet the needs of different communities and applications. Implementations of TAP can develop this flexibility in the process of converting TAP from its original delimited format into the format needed by the profile applications.

## Namespace declarations

When using IRIs as identifiers in the cells of a tabular profile it is common to shorten the IRI by providing a local name (a prefix) that represents the base of the identifier (a namespace), such that:

`dct:subject` = `http://purl.org/dc/terms/subject`<br />
`foaf:name` = `http://xmlns.com/foaf/0.1/name`<br />

Although there are some conventions of short names for frequently used vocabularies, it is always preferable to provide users of your data with your chosen practice so that expansion of the shortened IRIs will be correct. The actual format of the declaration of prefix and namespace varies by programming language although the basic content does not vary. A table could accompany the tabular profile with the basic information, and applications processing the profile could incorporate this information in the format they require. A simple tabular format for prefixes and namespaces could be:

| prefix | namespace |
| ---- | ---- |
| foaf: | http://xmlns.com/foaf/0.1/ |
| dct: | http://purl.org/dc/terms/ |

Other methods may be used to convey this essential information in a way that is compatible with your expected programming environment.

For correct interpretation of the tabular profile it is recommended that this information be made available with the profile.

## Default values

## Extending TAP with added columns

## Creating a TAP using multiple spreadsheet "sheets"


## Localizing TAP 
Languages and terminology
Boolean values

## How shapes align with metadata

## Validating Data Using TAP

A TAP provides some information that could be used in validating instance data, but formal rules for validation of data are out of scope for TAP. However, the TAP model is expected to define basic rules that may intereact with validation software or practices. This section will give some information on how to view the constraints in a TAP in relation to validation.

### Statement Constraints

A TAP defines the context and constraints for the validation of metadata statements, where a "statement" is a key/value pair in the applicable metadata. The TAP propertyID and its constraints are within the context of the shape in which the property is defined. Thus, within a TAP with:

|shapeID|propertyID|
|----|----|
|Book|dct:identifier|
|Author|dct:identifier|

the `Book|dct:identifer` and the `Author|dct:identifier` are different statements.

Statement constraints within a shape with the same propertyID and different constraints on that property are also separate, unique statements that can be evaluated individually against the metadata the profile describes, such as:

|shapeID|propertyID| valueNodeType
|----|----|----|
|Book|dct:subject|IRI|
|Book|dct:subject|literal|

How these are interpreted in terms of validation, for example whether these statements are considered each on their own or together with a logical "OR" or "AND" is determined by the rules of the validation program.

### Cardinality

### Open/closed

One decision needed for validation of metadata is whether the validation will be *open* or *closed*. In an open validation, metadata statements that do not match statement constraints in the TAP are not considered errors, although they may produce informational messages; conversely, a closed validation may reject or flag metadata statements that do not match the profile. 

