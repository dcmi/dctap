## Simple Book examples
A simple but hopefully reasonably realistic application profile for describing books and their authors using terms from DCMI Metadata Terms [dct](http://purl.org/dc/terms/)
Friend of a Friend [foaf](http://xmlns.com/foaf/0.1/)
and Schema.org [sdo](https://schema.org/)

* simpleBookTAP.csv

Line 1: Book instance data must have one and only one dct:title of type rdf:langString.

Line 2: Book instance data may have zero or more dct:creator described as an RDF instance with a URI or a BNODE, matching the #Author shape.

Line 3: Book instance data may have zero or one sdo:isbn with Literal value being an xsd:string composed of 13 digits only.

Line 4: Book instance data must have rdf:type of sdo:Book.

Line 5: Author instance data may have zero or more foaf:givenName with Literal value type xsd:string.

Line 6: Author instance data may have zero or more foaf:familyName with Literal value type xsd:string

Line 7: Author instance data must have rdf:type of foaf:Person

* shacl.ttl : a SHACL file generated from this TAP.

* SampleData : some valid and invalid sample data, useful for testing validation artefacts (e.g. SHACL or ShEx files) generated from the TAP.
