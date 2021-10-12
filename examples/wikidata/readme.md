Translation of Wikidata schemas for use in a DC TAP is based on the RDF model for Wikidata. 

Here is a snippet from https://www.wikidata.org/wiki/EntitySchema:E66, the schema for Mozart compositions. 

	p:P528 {
		ps:P528 xsd:string ;
		pq:P972 [
		        wd:Q162478 # Köchel catalogue
		        wd:Q22338962 # Köchel catalogue (1st edition)
		        wd:Q22340538 # Köchel catalogue (6th edition)
		        ];
	}+ ;

In this example `p:P528` defines the entity, which would correspond to a TAP shapeID. The `ps:P528` is a propertyID and  xsd:string is the value datatype. `pq:P972` is the qualifier, and there are 3 items in its "picklist". This translates to this TAP:

| shapeID | propertyID |valueDatatype| valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- | ---- |
| p:P528 | ps:P528 | xsd:string | | | 
| pq:P972 | |  | wd:Q162478 wd:Q22338962 wd:Q22340538 | picklist |

Because the qualifiers "self-identify" with their namespace, and because WD code appears to treat them side-by-side with other properties, then it does not appear that they need a separate column in TAP.

The examples in this folder follow this logic.
