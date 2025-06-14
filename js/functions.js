// Common JavaScript functions for UBus Management

// Get dropdown list based on URL and populate select element
function getDropList(url, elementId, selectText, selectedValue, onChangeFunction) {
    var element = document.getElementById(elementId);
    if (!element) return;
    
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(result) {
            var options = '<option value="">' + selectText + '</option>';
            
            for (var i = 0; i < result.length; i++) {
                var selected = (selectedValue == result[i].id) ? 'selected' : '';
                options += '<option value="' + result[i].id + '" ' + selected + '>' + result[i].name + '</option>';
            }
            
            element.innerHTML = options;
            
            if (onChangeFunction && selectedValue) {
                eval(onChangeFunction);
            }
        },
        error: function() {
            console.log("Error loading dropdown data");
        }
    });
}

// Get stoppage bus based on selected city
function getStoppageBus(form, url) {
    var cityId = form.preference.value;
    if (!cityId) return;
    
    $.ajax({
        type: "POST",
        url: url,
        data: { cityId: cityId },
        dataType: "json",
        success: function(result) {
            var options = '<option value="">Choose Stoppage</option>';
            
            for (var i = 0; i < result.length; i++) {
                options += '<option value="' + result[i].id + '">' + result[i].name + '</option>';
            }
            
            document.getElementById('preferenceStoppageId').innerHTML = options;
        },
        error: function() {
            console.log("Error loading stoppage data");
        }
    });
}

// View stoppage details
function getViewStoppage() {
    var stoppageId = document.getElementById('preferenceStoppageId').value;
    if (!stoppageId) {
        document.querySelector('.detailed-view-box').style.display = 'none';
        return;
    }
    
    $.ajax({
        type: "POST",
        url: 'newsessionfee/getStoppageDetails',
        data: { stoppageId: stoppageId },
        dataType: "html",
        success: function(result) {
            document.querySelector('.detailed-view-box').innerHTML = result;
            document.querySelector('.detailed-view-box').style.display = 'block';
        },
        error: function() {
            console.log("Error loading stoppage details");
        }
    });
}

// Add booking for bus
function addBookingBus(form, action) {
    var stoppageId = form.preferenceStoppageId.value;
    if (!stoppageId) {
        alert("Please select a stoppage");
        return false;
    }
    
    if (confirm("Are you sure you want to book this route?")) {
        form.action = 'newsessionfee/' + action;
        form.submit();
        return true;
    }
    
    return false;
}

// Get remarks for fine
function getRemarks(id) {
    var queryString = "id=" + id;
    var url = 'finecollection/getRemarks';
    
    $.ajax({
        url: url,
        method: "post",
        data: queryString
    }).done(function(data) {
        $(".student-model-title").html("Fine Remarks");
        $(".student-model-data").html(data);
        $('#studentModal').modal('show');
    });
}

// Handle checkbox selection for fines
function doFineAll() {
    var checkAll = document.getElementById('chkAll').checked;
    
    $(".cls_chk").each(function() {
        this.checked = checkAll;
    });
}

// Print receipt
function getPrint(id) {
    var frm = document.frmAddEdit;
    frm.idP.value = id;
    
    document.getElementById('frmAddEdit').target = "_blank";
    document.getElementById('frmAddEdit').action = 'finecollection/receiptprint';
    document.getElementById('frmAddEdit').submit();
}

// Add route cancellation request
function addData() {
    $('#savedButton').hide();
    $('#loaderB').show();
    
    if (confirm("Do you want to apply Route Cancellation Request?") === false) {
        $('#savedButton').show();
        $('#loaderB').hide();
        return false;
    }

    document.getElementById('frmAddEdit').target = 'uploadTargetAdd';
    document.getElementById('frmAddEdit').action = "routecancellation/getAdd";
    document.getElementById('frmAddEdit').submit();
    return false;
}

// Show content in modal
function getShowContent(id) {
    var url = 'policy/getContent';
    
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: {type: id},
        beforeSend: function() {},
        success: function(result) {
            $("#modalLabel").html(result.heading);
            $("#divContent").html(result.html);
        },
        complete: function() {},
        error: function() {
            alert("Some Error");
        }
    });
}

// Forgot password function
function forgotPassword() {
    document.location.href = "forgot";
} 