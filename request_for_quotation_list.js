frappe.listview_settings['Request for Quotation'] = {
    get_indicator: function(doc) {
        if (doc.status === 'Quotation Partially Received') {
            return [__('Quotation Partially Received'), 'orange', 'status,=,Quotation Partially Received'];
        }
        else if (doc.status === 'Quotation Received') {
            return [__('Quotation Received'), 'green', 'status,=,Quotation Received'];
        }
        else if (doc.status === 'Submitted') {
            return [__('Submitted'), 'blue', 'status,=,Submitted'];
        }
        else if (doc.status === 'Draft') {
            return [__('Draft'), 'grey', 'status,=,Draft'];
        }
        else if (doc.status === 'Cancelled') {
            return [__('Cancelled'), 'red', 'status,=,Cancelled'];
        }
        return [__(doc.status), 'grey', 'status,=,' + doc.status];
    }
};
