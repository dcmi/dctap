# Implementing DC TAP

## Introduction

The DC TAP model is purposely designed to be a simple core for application profiles in tabular form. Although the TAP can be used as is, many implementations of TAP will require extensions to the model. This document addresses some implementation options as examples of use of a profile that has been initially defined in TAP.

## Implementing TAP

TAP is an actionable document, but it is primarily a documentation of an application profile. In most cases, make use of the TAP will require some additional information that is needed for implementation of the profile.

One usually works with tables in a spreadsheet program like MS Excel or Open Office or a document editing program that supports tables. To be actionalable a TAP needs to be saved in a format that can be processed by program code. For the TAP we recommend that the table be saved in a standard comma-separated format, such as [CSV](https://datatracker.ietf.org/doc/html/rfc4180). Other storage forms exist for tabular data, such as tab-separated values, which is widely recognized by programming languages. The important point is to store the TAP in a machine-actionable format so that it can be directly used by programs implementing the profile.

There are some common elements that may be needed by TAP implementations:

* providing administrative metadata about the TAP (creators, versions, etc.)
* providing information that is needed to make use of the TAP, such as namespace prefixes, default values
* configuration information that can be used by programs to extend the basic TAP model (additional columns) or that can localize the TAP model with translations of headers and terms

It is best to think of TAP as a basic core that can be extended or molded to meet the needs of different communities and applications. Implementations of TAP can develop this flexibility in the process of converting TAP from its original delimited format into the format needed by the profile applications.
