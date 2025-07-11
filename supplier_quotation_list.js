frappe.listview_settings['Supplier Quotation'] = {
	add_fields: ["supplier", "base_grand_total", "status", "company", "currency"],
	get_indicator: function(doc) {
		if(doc.status==="Ordered") {
			return [__("Ordered"), "purple", "status,=,Ordered"];
		} else if(doc.status==="Rejected") {
			return [__("Lost"), "darkgrey", "status,=,Lost"];
		}
	}
};
