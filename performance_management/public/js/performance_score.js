//frappe message for performance score field if input > 100 or < 1
frappe.ui.form.on('Performance Review', {    
    performance_score: function (frm) {
        var scoreNo = frm.doc.performance_score;
        if (scoreNo > 100) {
            frappe.msgprint(__('Performance score: Value must 1 - 100'));
            frappe.validated = false;
        }
        if (scoreNo < 1) {
           frappe.msgprint(__('Performance score: Value must 1 - 100'));
           frappe.validated = false;
        }
   }
});

//validate function for performance score field if input > 100 or < 1
frappe.ui.form.on('Performance Review', {    
    validate: function (frm) {
        var scoreNumber = frm.doc.performance_score;
        if (scoreNumber > 100) {
            frappe.msgprint(__('Performance score: Value must 1 - 100'));
            frappe.validated = false;
        }
        if (scoreNumber < 1) {
           frappe.msgprint(__('Performance score: Value must 1 - 100'));
           frappe.validated = false;
        }
   }
});

//validate input number only in performance score field
frappe.ui.form.on('Performance Review', 'validate', function(frm) {
   var regex = /[^0-9]/g;
   if (regex.test(frm.doc.performance_score) === true){
       frappe.msgprint(__('Performance Score: You must input number'));
       frappe.validated = false;
   }
   });

frappe.ui.form.on('Performance Review', {    
    performance_score: function (frm) {
        var regexNo = /[^0-9]/g;
        if (regexNo.test(frm.doc.performance_score) === true) {
            frappe.msgprint(__('Performance Score: You must input number'));
            frappe.validated = false;
        }
    }
});

//input number only function in performance score field onload
frappe.ui.form.on('Performance Review', {
    onload: function(frm) {
        // Add the input field's wrapper to the form
        let numberInput = $(frm.fields_dict['performance_score'].wrapper).find('input');
        let errorDiv = $('<div id="error" style="color:red; display:none;">Please enter a valid number.</div>');
        numberInput.after(errorDiv);

        numberInput.on('input', function(event) {
            const value = event.target.value;

            // Validate that the input is a number
            if (/^\d*$/.test(value)) {
                errorDiv.hide();
            } else {
                errorDiv.show();
                event.target.value = value.replace(/\D/g, ''); // Remove any non-digit characters
            }
        });
    }
});

//input number only function in performance score field on refresh
frappe.ui.form.on('Performance Review', {
    refresh: function(frm) {
        // Add the input field's wrapper to the form
        let numberInput = $(frm.fields_dict['performance_score'].wrapper).find('input');
        let errorDiv = $('<div id="error" style="color:red; display:none;">Please enter a valid number.</div>');
        numberInput.after(errorDiv);

        numberInput.on('input', function(event) {
            const value = event.target.value;

            // Validate that the input is a number
            if (/^\d*$/.test(value)) {
                errorDiv.hide();
            } else {
                errorDiv.show();
                event.target.value = value.replace(/\D/g, ''); // Remove any non-digit characters
            }
        });
    }
});

//validate for start date & end date field
frappe.ui.form.on('Performance Review', {
    validate: function(frm) {
        let start_date = frm.doc.performance_period_start;
        let end_date = frm.doc.performance_period_end;

        if (start_date && end_date) {
            if (new Date(start_date) > new Date(end_date)) {
                frappe.msgprint(__('Start date cannot be after end date'));
                frappe.validated = false;
            }
        }
    }
});

//frappe message for start date field
frappe.ui.form.on('Performance Review', {
    performance_period_start: function(frm) {
        let start_date = frm.doc.performance_period_start;
        let end_date = frm.doc.performance_period_end;

        if (start_date && end_date) {
            if (new Date(start_date) > new Date(end_date)) {
                frappe.msgprint(__('Start date cannot be after end date'));
                frappe.validated = false;
            }
        }
    }
});

//frappe message for end date field
frappe.ui.form.on('Performance Review', {
    performance_period_end: function(frm) {
        let start_date = frm.doc.performance_period_start;
        let end_date = frm.doc.performance_period_end;

        if (start_date && end_date) {
            if (new Date(start_date) > new Date(end_date)) {
                frappe.msgprint(__('Start date cannot be after end date'));
                frappe.validated = false;
            }
        }
    }
});

//filters city field depend on province location
frappe.ui.form.on('Performance Review', {
    province: function(frm) {
        if(frm.doc.province) {
            frm.set_query("city", function() {
                return {
                    filters: {
                        "province": frm.doc.province
                    }
                };
            });
        }
        else {
            frm.set_query("city", function() {
                return {};
            });
        }
    }
});
