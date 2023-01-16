# Application profiles

An application profile defines metadata usage for a specific application. It describes, explains, and defines additional rules for how existing vocabularies and models should be used in a metadata instance.

Creators and users of metadata need to be able to explain to themselves and to others the expected qualities of their metadata. This is frequently done by creating an application profile that defines the elements that will be included and any existing rules for the creation or use of those elements. 

Profiles are often created as texts that are intended for a human audience. These texts generally employ tables to list the elements of the profile and related rules for metadata creation and validation. Such a document is particularly useful in helping a community reach agreement on its needs and desired solutions. To be usable for a specific function these decisions then need to be translated to computer code, which may not be a straightforward task.

## Dublin Core Tabular Application Profiles (DCTAP)

The goal of the DCTAP work is to provide a simple model that anyone can use to define their application profle. In keeping with the "core" philosophy of Dublin Core, this model does not attempt to cover every possible need but can be extended. The DCTAP uses a table format and only 12 primary elements. The table requires no specific technical knowledge beyond the understanding of the metadata use case. It is intended to be eventually saved in a machine-actionable CSV (comma separated values) file which can then be input to application programs.

### Documents in this project

* The [DCTAP Primer](https://dcmi.github.io/dctap/TAPprimer.html) is the best starting point for understanding DCTAP. With just the primer you should be able to create your first DCTAP.
* A basic list of [DCTAP Elements](https://dcmi.github.io/dctap/TAPelements.html) is provided with their definitions 
* If you experience any confusion about the terms used in the project, they are defined in the   [Framework for Talking About Metadata and Application Profiles](https://dcmi.github.io/dctap/talking\_about\_metadata.html)
* Examples of extensions and other complex uses of DCTAP are in the [DCTAP Cookbook](https://dcmi.github.io/dctap/DCTAP-Cookbook.html), which is (always) a work in progress
* The github repository includes [presentations](https://github.com/dcmi/dctap/tree/main/media) and [examples](https://github.com/dcmi/dctap/tree/main/examples) of uses. 

## Implementing DCTAP
### Starter files
There are three files on the working group's github site that you can use to begin your DCTAP. They each contain all of the columns of a DCTAP, but you can delete columns that you do not need.
* [Plain CSV](https://github.com/dcmi/dctap/blob/main/TAPtemplate.csv) which can be read by any spreadsheet program
* [Microsoft Excel](https://github.com/dcmi/dctap/blob/main/TAPtemplate.xlsx) format.
* [Open Office](https://github.com/dcmi/dctap/blob/main/TAPtemplate.ods) format

### Processing programs
These programs process the contents of the DCTAP directly and prepare the data for further use.
* dctap-python [documentation](https://dctap-python.readthedocs.io/en/latest/)

These programs (in progress) make use of the elements of a DCTAP.

* TAP-to-SHACL [github](https://github.com/philbarker/TAP2SHACL)
* TAP-to-ShEx [github](https://github.com/tombaker/tapshex)

### Implementations
TBA

## Background work

* The [Singapore framework](https://www.dublincore.org/specifications/dublin-core/singapore-framework/), developed in 2008, provides a context for application profiles as a stack of work items. 
* [DCMI Abstract Model](https://www.dublincore.org/specification_status/recommendation/) is a general model of metadata that informs the application profile work


