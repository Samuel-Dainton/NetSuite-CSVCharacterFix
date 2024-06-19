/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record'], function(record) {

    function beforeSubmit(context) {
        var newRecord = context.newRecord;

        // List of fields to check and replace characters in
        var fieldsToCheck = ['itemid', 'description']; // Add other fields as necessary
        
        fieldsToCheck.forEach(function(fieldId) {
            var fieldValue = newRecord.getValue({ fieldId: fieldId });
            if (fieldValue) {
                // Replace occurrences of special characters
                fieldValue = fieldValue.replace(/âŒ€/g, '⌀').replace(/â²/g, '²');
                newRecord.setValue({ fieldId: fieldId, value: fieldValue });
            }
        });
    }

    return {
        beforeSubmit: beforeSubmit
    };
});