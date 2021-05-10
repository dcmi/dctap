# Tests in CSV

This lists data situations to be tested. As they are created, they will be linked. Note that some tests may move from Good to Bad or vice versa as we decide what software should tolerate.

## Good
* Only propertyID
* propertyID and label
* label first then propertyID
* shapeID not as first column

## Bad (?)
* No propertyID
* propertyID rows before first shapeID row
* shapeID appears more than once, but without intervening shapes
* shapeID appears more than once, but with intervening shapes
