# Samvera MODS to RDF Recommendations - Represented in DC TAP format

These Tabular Application Profile (TAP) examples represent an adaptation of the MODS to RDF Mapping Recommendations (v.1.0) completed by the Samvera MODS to RDF Working Group in January of 2019, which are available from the group's [wiki](https://wiki.lyrasis.org/display/samvera/MODS+and+RDF+Descriptive+Metadata+Subgroup).

I made these adaptations in November of 2020. Generally speaking, I tried to stay as close to the details of the document as I could. Here are some points of difference.

- The set of recommendations addresses the top-level MODS elements, although it does not map all of them. It also provides two options for certain elements: a direct mapping option and a more complex minted-object mapping option. I represented these options in separate sheets, but I supplemented the minted-object mapping sheet with the direct mapping options for the MODS elements that did not have a minted-object option, for the sake of completeness.

- The minted-object mapping option specifies classes for the minted objects. I included these statements in the TAP adaptation. The class is given as a valueConstraint value.

- In order to preserve the references to the MODS top-level elements, I used their names for the shapeID values in the minted-object mappings, and I prepended a statement to the note values of the direct-mapping options.

- I devised propertyLabel values with reference variously to the MODS elements names, the propertyID values, hints in the notes and so forth.

- I added mandatory and repeatable values based on the MODS specification, which states that no element is mandatory and every element is repeatable with the exception of recordInfo.

- Predicates that could take an IRI or a literal are represented twice, to conform to the limitations of the current TAP format. Accompanying notes were modified accordingly.

- Where the Recommendations had URI, I replaced it with IRI for consistency with the TAP format.

- The Recommendations included proposals for predicates that could be created and hosted in the OpaqueNamespace platform. I left those as-is.

- The Recommendations included predicates from some vocabularies like the MARC Code List for Relators, indicating that any predicate from that vocabulary could be used, and presenting this with form such as relators:[term] or classSchemes:[code]. Where this form was found, I replaced the bracketed element with a sample term and amended the note to convey the intended meaning.

- I would like to acknowledge the tremendous amount of work carried out by members of the Samvera community over a long period of time that went into the creation of this set of recommendations, and to applaud them for it. I encourage interested parties to consult the Recommendations document itself for full details on the process and its outcomes.

John Huck
November, 2020
john.huck@ualberta.ca
