# Talking about metadata and application profiles

Authors: [DCMI Application Profile Interest Group](https://www.dublincore.org/groups/application_profiles_ig/).

Date: June 9, 2022

## Introduction

It is hard to talk about application profiles because they are two degrees of abstraction removed from reality. Application profiles are about metadata. Metadata, in turn, is about things in the world that are being described. 

The many technologies used for metadata today describe themselves in terms that may sound superficially similar while being based on subtly different concepts. Consider the many meanings of "class" or "type" or of our favorite: "schema" (see "How to confuse yourself and everyone else" below).

This style guide presents the terminology we used in designing the DC Tabular Application Profiles model [[DCTAP](https://www.dublincore.org/groups/application_profiles_ig/dctap_primer/)]. Every term here is used with multiple meanings elsewhere, but following this pattern consistently can help avoid (or at least resolve) potential confusion.

This terminology largely follows the Resource Description Framework (RDF) because RDF is the most widely recognized language for "graph metadata"—a modern approach to metadata that favors the ability to link or combine data from different sources on the basis of a generically interoperable model [[RDF Primer](https://www.w3.org/TR/rdf11-primer/)]. Most metadata in the world is not natively expressed in RDF but can, *in principle*, be converted into RDF for the purpose of interoperability. Expression in RDF requires clarity about the things being described and their characteristics. The modeling discipline required by RDF makes for well-designed, interoperable metadata, and thus provides a good foundation for DC TAP.

[Orwell's rule 6](https://en.wikipedia.org/wiki/Politics_and_the_English_Language#Remedy_of_Six_Rules) applies: "break any of these rules sooner than say anything outright barbarous".

## The things being described
**Entities** exist in the real or imaginary world, they may be material, digital or purely conceptual. RDF calls them resources.

Entities have **characteristics** and **relationships** to other entities.

Entities may be grouped by shared characteristic or relationship, or by enumeration into **types or classes of entity**.

In RDF, entities and types of entity are identified with IRIs.

## The metadata
**Metadata instances** describe entities. In the case of a conceptual enitity, the metadata may act as a definition. Metadata instances are composed of **statement**s.

A **statement** in a metadata instance asserts a value for a single characteristic of a single entity or one relationship between it and another entity. 

In RDF, as in natural languages, a statement has a **subject**, a **predicate** and an **object**. 

The **subject**, is an identifier for the entity being described.

The **predicate** is an identifier for the characteristic or relationship in the statement.

The **object** is a description of the characteristic or an identifier  the related entity.

An object in one statement may be the subject or object of other statements, so that RDF metadata may be visualized as a network or **graph** of **nodes** connected by predicates. The connecting predicates are often called **edges**. 

An arrangement of nodes and edges forms a **shape**.

Other metadata frameworks have elements, or attributes and values, or key-value pairs. For example XML and JSON are hierarchical tree-like structures. XML documents are structured as nested elements, which may have attributes.

In the TAP, we often refer to the **object** as the **value** of the property in a metadata instance.

## The vocabularies and models
**Vocabularies** and **data models** are the raw materials of metadata. These may be published community standards or as ad hoc specifications. Metadata standards and specifications may define usage rules. Sometimes the combination of a vocabulary and a model is called a schema, however the term schema is used in very different ways in different metadata frameworks (see below).

One type of vocabulary comprises **descriptive terms**, such as **properties** and **classes** and relationships between the terms. Another type of vocabulary may be a list of values which can be used in describing the characteristics of an entity.

Vocabularies in RDF identify their terms with IRIs. In RDF instance data **predicates** are identified as **properties**, that is, they describe a **characteristic** or **relationship** that may be asserted. An **RDF class** identifies a type or class of entity.

Other metadata frameworks follow a similar pattern of a vocabulary (sometimes called data elements or terms) and a model.

## The application profile, including TAPs
An **application profile** describes, explains, and defines additional **rules** for how existing vocabularies and models should be used in a metadata instance. 

An application profile comprises a set of **templates** for metadata statements in the instance data. The templates define and describe local choices for how statements are constructed, which may include constraints and explanatory information such as labels and notes. Examples of **constraints** are cardinality of statements, type of the value of a property, and specific rules for the property values.

The DC TAP specification defines a tabular format for application profiles in which statement templates are the *rows* and the individual **elements** of those templates form the *columns*.

A set of statement templates that applies to a single entity or concept defines a **shape**. A **shape** comprises **statement templates** for a **node** in the metadata that meets some criterion or criteria, for example all nodes belonging to a given class or that are an **object** of a given **property**. Shapes in the profile may be the same as the structures defined in the metadata **model**, or they may be defined in the profile as a derived view over the metadata.


## WARNING: How to confuse yourself and everyone else
Since entities in the world include digital and conceptual things, it follows that metadata, vocabularies, models and application profiles, properties, statements and all the rest are entities, and that you can have metadata about any of these things. Likewise, metadata vocabularies and application profiles describe and/or define concepts and so are forms of metadata. However, pursuing this line of thinking will only serve to confuse.

We have tried to avoid using the word "**schema**". Originating from philosophy and then used in psychology to mean something like a mental model or framework by which the world is interpreted, it was co-opted by computer science to mean some sort of data model. Unfortunately we now find ourselves in a world where we have relational database schemas, XML Schema Definitions (XSD), RDF-Schema (RDFS), JSON-Schema, schema.org, as well as informal use of the word to mean a data standard. There is also potential for use as a malapropism for the words 'scheme' and 'schematic [diagram]'. If used without qualification as to which of these is intended, the word on its own is hopelessly ambiguous. We have used **data model** when we mean the broad computer science sense of the word schema.

## In summary
For real world things: use **entity**, **characteristic**, **relationship** and **type** or **class of entity**.

For metadata: use **instance** (data); and in RDF metadata: **statement**, **subject**, **predicate**, **object**, **value**,  **node**, **graph** and **edge**.

For **vocabularies** and **data models**: use **term**, **property** and (metadata) **class**.

For application profiles (especially TAPs): use **statement template** **constraint**, **element** and **shape**.


### References
**[DCTAP]** Karen Coyle (*ed.*) [DC Tabular Application Profiles (DC TAP) - Primer](https://www.dublincore.org/groups/application_profiles_ig/dctap_primer/) DCMI  working draft for comment. URL: https://www.dublincore.org/groups/application_profiles_ig/dctap_primer/ (This reference should be updated when the final version is published. Current work can be found on the [DCTAP Github repository](https://github.com/dcmi/dctap).)

**[RDF Primer]** Guus Schreiber and Yves Raimond (*eds.*), [RDF 1.1 Primer](https://www.w3.org/TR/rdf11-primer/). W3C Working Group Note 24 June 2014. URL: https://www.w3.org/TR/rdf11-primer/
