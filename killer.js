var len = document.getElementsByClassName('title').length;

for (var i = 0 ; i < len ; i++){


    console.log(i);
    if (document.getElementsByClassName('title')[i].children.length == 0 || document.getElementsByClassName('title')[i].children[0].onclick == null){
        continue;
    }
    document.getElementsByClassName('title')[i].children[0].click();

    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);

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
       //p_progrs_chk_mthdz_cd:jQuery("#p_progrs_chk_mthdz_cd").val(),
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
       //진도 처리 후 목록 reload
       parent.jsGetLoList();
       //점수(진도) 재계산 후 학습자정보 재조회
       parent.jsGetStudentInfo();
       
       //저장 후에는 정지했던 기준시간을 초기화한다.
       jQuery("#p_study_pausetime").val("0");
       
       closeWorkProgress();
       
       //학습시작 시간 초기화
       pageDate = new Date(); //현재 날짜 생성
       pageTime = pageDate.getTime(); //현재 시간을 가져온다.
       
       //확인 후 만들 것!
       //setCommitSessionCallBack(data.retVal);
       //getEduyn();
    },
    error : function(err){
       closeWorkProgress();
       sessionCallBack();
    }
 });
    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);
}