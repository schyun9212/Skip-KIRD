var targets = document.getElementsByClassName('title');
var len = targets.length;

var interval = 2000;

function run(count){
    
    if (count < len) {
	    if (targets[count].children.length > 0 && targets[count].children[0].onclick != null){
        
            // select target menu
            targets[count].children[0].click();

            // wait loading and run skip event
            setTimeout(function(){
                skip(count);
            }, interval);

	    }
	    else{ setTimeout(run(count + 1), 10); }
    }
    else { console.log("all contents were skipped"); }    
}

function skip(count){

	jQuery.ajax({
		url : "/usrs/lms/clsrm/clsrmCmiBaseTimeCommit.do",
		cache : false,
		dataType: 'json',
		async: false,
		data : {
			p_lm_mapp_id : jQuery("#p_before_lm_mapp_id", parent.document).val(),
			p_student_id : jQuery("#p_student_id", parent.document).val(),
			p_crs_frm_cd : jQuery("#p_crs_frm_cd", parent.document).val(),
			p_cntnts_cmpstn_cd : jQuery("#p_cntnts_cmpstn_cd", parent.document).val(),
			p_itemid: jQuery("#p_itemid", parent.document).val(),
			p_studytime: 1078,
			p_crscd : jQuery("#p_crscd", parent.document).val(),
			p_crsseq_id : jQuery("#p_crsseq_id", parent.document).val(),
			p_contsid : jQuery("#p_contsid", parent.document).val(),
			p_year : jQuery("#p_year", parent.document).val(),
			p_lssn_cmpltn_base: jQuery("#p_lssn_cmpltn_base", parent.document).val(),
			p_lssn_cmpltn_base_useyn : jQuery("#p_lssn_cmpltn_base_useyn", parent.document).val(),
			p_lssn_cmpltn_base_cd : jQuery("#p_lssn_cmpltn_base_cd", parent.document).val()
				, mkey:'8767'
		},
		success : function(data){

			parent.jsGetLoList();
			parent.jsGetStudentInfo();

			jQuery("#p_study_pausetime").val("0");

			closeWorkProgress();

			pageDate = new Date();
			pageTime = pageDate.getTime();

		},
		error : function(err){
			closeWorkProgress();
			sessionCallBack();
		}
    });
    
	setTimeout(function(){
		run(count + 1);
    }, interval);
    
}

run(0);
