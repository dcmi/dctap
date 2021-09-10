# DataCite examples

## DataCite itself

DataCite is an XML schema metadata format that is used by many organizations. Being in XML, with the metadata defined in XML schema, this poses some interesting challenges for DCTAP, which was developed with RDF data in mind.

One of the questions is: which view should be profiled? The XSD itself? Or the user documentation? We tried both:
* [DataCite-TAP](dataciteUser.csv) from User Documentation
* [DataCite-TAP](DataCiteXML.csv) from XSD

It is possible that both are useful. Note that these are attempts to "DCTAP-ize" the full vocabulary. The OpenAIRE example below is a profile that uses DataCite elements.

## OpenAIRE Application Profile

The [OpenAIRE Application Profile](https://openaire-guidelines-for-literature-repository-managers.readthedocs.io/en/v4.0.0/application_profile.html) uses elements from Dublin Core Terms, from DataCite, and from its own OpenAIRE vocabulary. The DCTAP of the OpenAIRE AP is based on the user documentation for version 4.0. It appears that the next version of OpenAire is more closely aligned with DataCite.

* OpenAIRE4-TAP
