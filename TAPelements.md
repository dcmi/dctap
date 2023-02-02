# Elements for DC Tabular Application Profiles

**Date:**
December 16, 2022

**Status:**
Draft - Request for Comments

**Editors:**
Karen Coyle

**Contributors**

Tom Baker, DCMI

Phil Barker, Cetis LLP

John Huck, University of Alberta

Nishad Thalhath, University of Tsukuba

### Documents in this project:

-   [DCTAP Primer](https://dcmi.github.io/dctap/TAPprimer.html)
-   [DCTAP Elements](https://dcmi.github.io/dctap/TAPelements.html) (This document)
-   [DCTAP Cookbook](https://dcmi.github.io/dctap/DCTAP-Cookbook.html)
-   [Framework for Talking About Metadata and Application Profiles](https://dcmi.github.io/dctap/talking_about_metadata.html)

## Introduction

These elements support the specification of [Dublin Core Tabular Application Profiles](https://github.com/dcmi/dctap/blob/main/TAPprimer.md) (DC TAP). They may be used to create a table or spreadsheet that defines an application profile. For convenience, they are provided for download as: 
* a [comma separated value template](https://github.com/dcmi/dctap/blob/main/TAPtemplate.csv)
* an [MS Excel file](https://github.com/dcmi/dctap/blob/main/TAPtemplate.xsls)
* an [OpenOffice file](https://github.com/dcmi/dctap/blob/main/TAPtemplate.ods)

An application profile comprises a set of templates for metadata statements in the instance data. The templates define and describe local choices for how statements are constructed, which may include constraints and explanatory information such as labels and notes. A set of statement templates that applies to a single entity or concept defines a shape. 
![](https://i.imgur.com/RtlQFOI.jpg)


The components of a dctap are shapes and statement templates. A shape combines one or more statement templates that describe a single thing or concept.

![](https://i.imgur.com/ay5MoPm.jpg)



## DCTAP Elements
The table below lists the elements that may appear as column headers in a DCTAP, along with their cardinality and the component of which they are part. 

| Element | Cardinality | Component | 
|---|---|--- | 
| shapeID | zero or one | shape | 
| shapeLabel | zero or one | shape |
| |  |  |  
| propertyID | one | statement template |
| propertyLabel | zero or one | statement template | 
| mandatory | zero or one | statement template | 
| repeatable | zero or one | statement template | 
| valueNodeType | zero or one | statement template | 
| valueDataType | zero or one | statement template | 
| valueShape | zero or one | statement template | 
| valueConstraint | zero or one | statement template | 
| valueConstraintType | zero or one | statement template | 
| note | zero or one | statement template | 


## Concept definitions

### Profile

Using terms from existing vocabularies, an application profile specifies the structures and metadata terms used in a dataset. At a minimum the profile must provide the data elements, or properties, that are valid for use in the metadata. A profile may also further define metadata validity, such as value constraints and cardinality of elements. 

### Shape

A shape is a group of statement templates that share a subject and are identified with the same shapeID. 
### Statement template

A statement template consists of a property, rules that constrain the property and its value, labels, and notes. 

## Element definitions

### shapeID

A literal or IRI that uniquely identifies the shape within the context of the profile.

### shapeLabel

A human-readable label for the shape.


### propertyID

An IRI or literal that identifies the property. It is recommended to use an identifier of a vocabulary term defined in an existing vocabulary.

### propertyLabel

A human-readable label for the property.

### mandatory

Indicates whether or not the metadata must contain a statement that is consistent with this statement template. This is a Boolean value such as "true" or "false", or "1" or "0".

### repeatable

Indicates whether or not the metadata may contain multiple instances of statements that are consistent with this statement template. This is a Boolean value such as "true" or "false", or "1" or "0".

### valueNodeType

This is the node type of the value node. When using RDF properties, the minimum set of values is: "IRI", "literal", "bnode".

### valueDataType
The data type of the value. This should be expressed with a standard identified type such as those defined in the XML schema datatypes specification ([XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](http://www.w3.org/TR/xmlschema11-2/)). Where the value must be a valid RDF literal value, use those defined in ([RDF Concepts - Datatypes](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-Datatypes)).

### valueShape

The valueShape of a property is a string matching a shapeID in the same profile. The string may be in the form of an IRI.

### valueConstraint

The valueConstraint gives rules relating to the value beyond that which has been defined by the property, the valueNodeType and valueDataType.

### valueConstraintType

Value constraints may not be actionable unless the type of constraint is defined. A minimum set of types is: "picklist", "IRIstem", "pattern", "languageTag", "minLength", "maxLength", "minInclusive", "maxInclusive". These are defined in the [DC TAP primer](https://github.com/dcmi/dctap/blob/main/TAPprimer.md#value-constraint-type). Other types may be supplied in the TAP.

### note

Any explanatory information related to the statement template or any part of the statement template, generally in natural language.

