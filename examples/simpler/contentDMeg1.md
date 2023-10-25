
ContentDM elements

| Field name | DC mapping | Data type | Authority File |
| ------| ------| ------|---|
| Title | Title | Text | |
| Subject |Subject | Text | |
| Description | Description | Text | |
| Creator | Creator | Text | LCA |
| Publisher | Publisher |Text | |
| Date | Date | Text| |

DCTAP elements

| propertyLabel | propertyID | ValueDataType|valueConstraint|valueConstraintType|
| ------| ------| ------|---|---|
| Title | dc:title | Text| | |
| Subject |dc:subject | Text| | |
| Description | dc:description | Text | | |
| Creator | dc:creator | Text | https://authorities.loc.gov/ | picklist |
| Publisher | dc:publisher |Text | | |
| Date | dc:date | Text | | |

ContentDM property tables can also include values for "hidden" (whether a term is hidden in the interface) and "big field" (which determines the type of input box in the user interface). Although these are not natively included in DCTAP, additional columns can be added to include these. Because these are both binary fields, values in them can be created as true/false, 1/0, or another value like yes/no:

| propertyLabel | propertyID | ValueDataType|valueConstraint|valueConstraintType|hidden|bigField|
| ------| ------| ------|---|---|--|--|
| Title | dc:title | Text| | | false|true|
| Subject |dc:subject | Text| | |false|false|
| Description | dc:description | Text | | |false|false|
| Creator | dc:creator | Text | https://authorities.loc.gov/ | picklist |false|false|
| Publisher | dc:publisher |Text | | |false|false|
| Date | dc:date | Text | | |false|false|
