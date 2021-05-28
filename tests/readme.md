# Tests in CSV

This lists data situations to be tested. As they are created, they will be linked. Note that some tests may move from Good to Bad or vice versa as we decide what software should tolerate.

## Good
* Only propertyID [propIDonly.csv](propIDonly.csv)
* propertyID and label
* label first then propertyID
* shapeID not as first column
* one with everything
* 
* valueConstraints:
    *  picklist
    *  URIstem - one, and more than one
    *  picklist with quoted string
    *  regex
    *  single value, no valueConstraintType 

## Bad (?)
* No propertyID [noPropertyID.csv](noPropertyID.csv)
* propertyID rows before first shapeID row [propsBeforeShape.csv](propsBeforeShape.csv)
* shapeID appears more than once, but without intervening shapes [twoSameShape.csv](twoSameShape.csv)
* shapeID appears more than once, but with intervening shapes [mixOfEmptyCells.csv](mixOfEmptyCells.csv)
* ValueNodeType in lower case [valueNodeTypeLowercase.csv](valueNodeTypeLowercase.csv)
* valueNodeWrong (valueWrong.csv](valeNodeTypeWrong.csv)
* Node type IRI with literal datatype [IRIwithLiteralDatatype.csv](IRIwithLiteralDatatype.csv)
* ShapeID with some blank and some filled [bothBlankAndFilledShapeID.csv](bothBlankAndFilledShapeID.csv)
* Literal node but no datatype [literalWithoutDatatype.csv](literalWithoutDatatype.csv)
* [ValueDataType wrong](valueDataTypeWrong.csv)
* Shape not referenced in valueShape [shapeNotReferenced.csv](shapeNotReferenced.csv)
* Value shape does not match a shape [shapewithoutShapeID.csv](shapewithoutShapeID.csv)
* Two valueNodeType columns [valueNodeTypeTwice.csv](valueNodeTypeTwice.csv)
* literal not an xsd:literal [valueDataTypeWrong.csv](https://github.com/dcmi/dctap/blob/main/tests/valueDataTypeWrong.csv)
* 

