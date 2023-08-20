import React, { useEffect, useState } from 'react'
import styles from './homepage.module.css'
import dashboardImg from '../../assets/images/dashboard.svg'
import quizImg from '../../assets/images/quiz.svg'
import noteImg from '../../assets/images/note-assesment.svg'
import adminImg from '../../assets/images/admin_meds.svg'
import totalAssessmentsIcon from '../../assets/images/assessmentsIcon.svg'
import candidatesIcon from '../../assets/images/candidatesIcon.svg'
import sourceIcon from '../../assets/images/sourceIcon.svg'
import purposeIcon from '../../assets/images/purposeIcon.svg'
import addIcon from '../../assets/images/addIcon.svg'
import submittedAssignmentIcon from '../../assets/images/submittedAssignment.svg'
import linkIcon from '../../assets/images/link.svg'
import Dots from '../../assets/images/3 dot.svg'
import callenderIcon from '../../assets/images/calendar_today.svg'
import hamburgerIcon from '../../assets/images/segment.svg'
import cross from '../../assets/images/cut.svg'
import search from '../../assets/images/search.svg'
import filter from '../../assets/images/filter.svg'
import bars from '../../assets/images/bar_chart.svg'
import onePerson from '../../assets/images/onePerson.svg'
import threePerson from '../../assets/images/threePerson.svg'


function Homepage() {
    // Define an array of sidebar items
    let iconsArray = [
        {name:"Dashboard" , img : dashboardImg},
        {name:"Assessment" , img : noteImg},
        {name:"My Library" , img : quizImg},    
    ]

    const [isActive , setIsActive] = useState("myAssessments") // active state for top navabr icon
    const [showRecordDiv , setShowRecordDiv] = useState(true)
    const [showAddAssessmentPopup , setShowAddAssessmentPopup] = useState(false);

    useEffect(() => {
        // when in mobile view record div id hide by the bars button, then if we resize the screen width to higher resolution 
        // then it should automatically show the records div
        function updateState() {
          const screenWidth = window.innerWidth;
          setShowRecordDiv(screenWidth > 550);
        }
        updateState();
        window.addEventListener('resize', updateState);
    
        return () => {
          window.removeEventListener('resize', updateState);
        };
      }, []);

    function openMenu() {     //open mobile sidebar
        const body = document.body;
        const menuContent = document.getElementById("menu-content");
        menuContent.style.transform = "translateX(0)";
        document.getElementById("overlay").style.display="block";
        body.style.overflow = "hidden"; 
      }
  
      function closeMenu() {  //close mobile side bar
        const body = document.body;
        const menuContent = document.getElementById("menu-content");
        menuContent.style.transform = "translateX(-100%)";
        menuContent.style.transition= "left 0.3s ease";
        document.getElementById("overlay").style.display="none";
        body.style.overflow = "auto";
      }
      function toggleRecordsContainer(){ // open or close records div in mobile view
        setShowRecordDiv(!showRecordDiv)
      }
      function handlePopupClose(){  // close add assessment popup
        setShowAddAssessmentPopup(false);
        const body = document.body;
        body.style.overflow = "auto"; 
      }
      function handlePopupOpen(){ // open add assessment popup
        const body = document.body;
        body.style.overflow = "hidden"; 
        setShowAddAssessmentPopup(true);
      }

  return (
    <div className={styles.mainContainer}>
        {/* add assessment popup with overlay */}
         {showAddAssessmentPopup && (
            <div className={styles.popupOverlay}>
                <div className={`${styles.popupContainer}`}>
                    <div className={styles.modalHeader}>
                    <span className={styles.popupHeading}>Create new assessment</span>
                    <img src={cross} onClick={handlePopupClose} style={{cursor:"pointer"}}></img>
                    </div>
                    <div className={styles.modalContent}>
                        <span className={styles.popupLabels}>Name of assessment</span>
                        <input className={styles.popupInput} placeholder="Type Here"></input>
                        <span className={styles.popupLabels}>Purpose of the test is</span>
                        <select className={styles.popupSelect} placeholder="Type Here">
                            <option value="select">Select</option>
                        </select>
                        <span className={styles.popupLabels}>Description</span>
                        <select className={styles.popupSelect} placeholder="Type Here">
                            <option value="select">Select</option>
                        </select>
                        <span className={styles.popupLabels}>Skills</span>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillsAddedDiv}>
                                <div className={styles.skill}>
                                    <span>UI/UX and Design</span>
                                    <img src={cross} style={{width: "18px"}}></img>
                                </div>
                                <div className={styles.skill}>
                                    <span>No of Question</span>
                                    <img src={cross} style={{width: "18px"}}></img>
                                </div>
                                <div className={styles.skill}>
                                    <span>Web Development</span>
                                    <img src={cross} style={{width: "18px"}}></img>
                                </div>
                                <div className={styles.skill}>
                                    <span>UI/UX and Design</span>
                                    <img src={cross} style={{width: "18px"}}></img>
                                </div>
                                <div className={styles.skill}>
                                    <span>Web Development</span>
                                    <img src={cross} style={{width: "18px"}}></img>
                                </div>
                            </div>
                            <input className={styles.skillInput} placeholder="Type Here"></input>
                        </div>
                        <span className={styles.popupLabels}>Duration of assessment</span>
                        <input className={styles.popupInput}placeholder="HH:MM:SS"></input>
                        <div className={styles.popupBtncontainer}>
                            <button className={styles.saveBtn}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
         )}
         {/* sidebar */}
        <div className={styles.leftContainer}>
            {
                iconsArray.map((item, idx)=>{
                   return <div className={`${styles.leftInnerContainer} ${idx===2 ? styles.dottedBorder : ""} ${idx===1 ? styles.activeSideNav : ""}`}>
                        <img src={item.img} className={styles.icon}></img>
                        <span className={styles.name}>{item.name}</span>
                    </div>
                })
            }
            <div className={styles.adminDiv}>Admin</div>
            <div className={`${styles.leftInnerContainer}`}>
                <img src={adminImg} className={styles.icon}></img>
                <span className={styles.name}>Round Status</span>
            </div>
            
        </div>
        {/* right side container  */}
        <div className={styles.rightContainer}>
            {/* top navbar */}
            <div className={styles.rightNavbar}>
                <div className={styles.heading}>Assessment</div>
                <div className={styles.vertical_line}></div>
                <div className={`${ styles.subHeading} ${isActive=== "myAssessments" ? styles.active : ""}`}>My Assessments</div>
            </div>
            {/* top navbar for mobile view */}
            <div className={styles.mobileviewtopNavbar}>
                <div className={styles.mobileTopUpperDiv}>
                    <img src={hamburgerIcon} onClick={openMenu}></img>
                    <span className={styles.assessmentLabel}>Assessment</span>
                </div>
                <div className={styles.mobileTopLowerDiv}>
                    <div className={styles.myAssessmentLabel}>My Assessments</div>
                    <div className={styles.unstopAssessmentlabel}>Unstop Assessments</div>
                </div>
            </div>
            {/* overlay for mobile sidebar */}
            <div className={`${styles.overlay}`} id="overlay"></div>
            {/* mobile sidebar */}
            <div className={styles.slidingNavbar} id="menu-content">
                <div className={styles.menuHeader}>
                    <span className={styles.menuTxt}>Menu</span>
                    <img src={cross} onClick={closeMenu}></img>
                </div>
                <div className={styles.menuList}>
                    <div className={styles.menuItem}>
                        <img src={dashboardImg}></img>
                        <span className={styles.menulabel}>Dashboard</span>
                    </div>
                    <div className={`${styles.menuItem} ${styles.assessmentMenuItem}`}>
                        <img src={noteImg}></img>
                        <span className={styles.menulabel}>Assessment</span>
                    </div>
                    <div className={styles.menuItem}>
                        <img src={quizImg}></img>
                        <span className={styles.menulabel}>My Library</span>
                    </div>
                    <div className={styles.strokeSeparater}></div>
                    <div className={`${styles.menuItem} ${styles.roundStatusDiv}`}>
                        <div className={styles.roundLeftDiv}>
                            <img src={adminImg}></img>
                            <span className={styles.menulabel}>Round Status</span>
                        </div>
                        <div className={styles.adminDiv} style={{margin:"0px"}}>Admin</div>
                    </div>
                </div>
            </div>
            <div className={styles.rightLowerDiv}>
                {/* overview container */}
                <div className={styles.overViewDiv}>
                    <span className={styles.lowerDivsHeadings}>Assessments Overview</span>
                    {showRecordDiv? 
                        <div className={styles.recordDiv}>
                            <div className={styles.totalAssessments}>
                                <span className={styles.recordsHeadings}>Total Assessment</span>
                                <div className={styles.totalAssessmentsDeatilsDiv}>
                                    <img className={styles.assessmentsIcon} src={totalAssessmentsIcon}></img>
                                    <span className={styles.assessmentsNumber}>34</span>
                                </div>
                            </div>
                            <div className={styles.candidates}>
                                <span className={styles.recordsHeadings}>Candidates</span>
                                <div className={styles.totalAssessmentsDeatilsDiv}>
                                     <img className={styles.assessmentsIcon} src={candidatesIcon}></img>
                                     <div className={styles.NumberDiv}>
                                        <div className={styles.NumberSpan}>
                                            <span className={styles.Number}>11,145</span>
                                            <span className={styles.NumberSmall}>+89</span>
                                        </div>
                                        <span className={styles.NumberHeading}>Total Candidate</span>
                                     </div>
                                     <div className={styles.smallVerticalLine}></div>
                                     <div className={styles.NumberDiv}>
                                        <div className={styles.NumberSpan}>
                                            <span className={styles.Number}>1,14</span>
                                            <span className={styles.NumberSmall}>+89</span>
                                        </div>
                                        <span className={styles.NumberHeading}>Who Attamped</span>
                                     </div>
                                </div>
                            </div>
                            <div className={styles.source}>
                                <span className={styles.recordsHeadings}>Candidates Source</span>
                                <div className={styles.totalAssessmentsDeatilsDiv}>
                                    <img className={styles.assessmentsIcon} src={sourceIcon}></img>
                                    <div className={styles.NumberDiv}>
                                        <div className={styles.NumberSpan}>
                                            <span className={styles.Number}>11,000</span>
                                            <span className={styles.NumberSmall}>+89</span>
                                        </div>
                                        <span className={styles.NumberHeading}>E-mail</span>
                                     </div>
                                     <div className={styles.smallVerticalLine}></div>
                                     <div className={styles.NumberDiv}>
                                        <div className={styles.NumberSpan}>
                                            <span className={styles.Number}>1,45</span>
                                            <span className={styles.NumberSmall}>+89</span>
                                        </div>
                                        <span className={styles.NumberHeading}>Unique Link</span>
                                     </div>
                                     <div className={styles.smallVerticalLine}></div>
                                     <div className={styles.NumberDiv}>
                                        <div className={styles.NumberSpan}>
                                            <span className={styles.Number}>145</span>
                                            <span className={styles.NumberSmall}>+89</span>
                                        </div>
                                        <span className={styles.NumberHeading}>E-mail</span>
                                     </div>
                                </div>
                            </div>
                            <div className={styles.totalPurpose}>
                                <span className={styles.recordsHeadings}>Total Purpose</span>
                                <div className={styles.totalAssessmentsDeatilsDiv}>
                                    <img className={styles.assessmentsIcon} src={purposeIcon}></img>
                                    <span className={styles.assessmentsNumber}>11</span>
                                </div>
                            </div>
                        </div>
                        :""
                    }
                </div>
                {/* my assessments container */}
                <div className={styles.myAssessmentsDiv}>
                    <span className={styles.lowerDivsHeadings}>My Assessment</span>
                    <div className={styles.mobileMyAssessments}>
                        <span className={styles.mobileMyAssessmentsTxt}>My Assessments</span>
                        <div className={styles.mobileMyAssessmentsRightDiv}>
                            <img src={search}></img>
                            <img src={filter}></img>
                            <img src={bars} onClick={toggleRecordsContainer} style={{cursor:"pointer"}}></img>
                        </div>
                    </div>
                    <div className={styles.myAssessments}>
                            <div className={styles.addAssessments} style={{cursor:"pointer"}} onClick={handlePopupOpen}>
                                <img className={styles.addIcon} src={addIcon}></img>
                                <span className={styles.textNewAssignmemt}>New Assessment</span>
                                <span className={styles.textNewAssignmemtDsc}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</span>
                            </div>
                            <div className={styles.submittedAssessments}>
                                <div className={styles.bagIconAndMoreOtionsDiv}>
                                    <img className={styles.bagIcon} src={submittedAssignmentIcon}></img>
                                    <img className={styles.threeDots} src={Dots}></img>
                                </div>
                                <div className={styles.assessmentNameAndDate}>
                                    <span className={styles.mathAssessmentText}>Math Assessment</span>
                                    <div className={styles.dateContainer}>
                                        <span className={styles.jobtext}>Job</span>
                                        <div className={styles.separateLine}></div>
                                        <div className={styles.dateCallenDiv}>
                                            <img className={styles.callenderIcon} src={callenderIcon}></img>
                                            <span className={styles.date}>20 Apr 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.durationAndQuesDiv}>
                                    <div className={styles.leftDurationDiv}>
                                        <div className={styles.durationNumberDiv}>
                                            <span className={styles.duration}>00</span>
                                            <span className={styles.durationTxt}>Duration</span>
                                        </div>
                                        <div className={styles.quesNumberDiv}>
                                            <span className={styles.ques}>00</span>
                                            <span className={styles.quesText}>Questions</span>
                                        </div>
                                    </div>
                                    <div className={styles.rightShareDiv}>
                                        <button className={styles.assessmentSareBtn}>
                                            <img className={styles.shareIcon} src={linkIcon}></img>
                                            <span className={styles.shareText}>Share</span>
                                        </button>
                                        <img src={onePerson}></img>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.submittedAssessments}>
                                <div className={styles.bagIconAndMoreOtionsDiv}>
                                    <img className={styles.bagIcon} src={submittedAssignmentIcon}></img>
                                    <img className={styles.threeDots} src={Dots}></img>
                                </div>
                                <div className={styles.assessmentNameAndDate}>
                                    <span className={styles.mathAssessmentText}>Math Assessment</span>
                                    <div className={styles.dateContainer}>
                                        <span className={styles.jobtext}>Job</span>
                                        <div className={styles.separateLine}></div>
                                        <div className={styles.dateCallenDiv}>
                                            <img className={styles.callenderIcon} src={callenderIcon}></img>
                                            <span className={styles.date}>20 Apr 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.durationAndQuesDiv}>
                                    <div className={styles.leftDurationDiv}>
                                        <div className={styles.durationNumberDiv}>
                                            <span className={styles.duration}>00</span>
                                            <span className={styles.durationTxt}>Duration</span>
                                        </div>
                                        <div className={styles.quesNumberDiv}>
                                            <span className={styles.ques}>00</span>
                                            <span className={styles.quesText}>Questions</span>
                                        </div>
                                    </div>
                                    <div className={styles.rightShareDiv}>
                                        <button className={styles.assessmentSareBtn}>
                                            <img className={styles.shareIcon} src={linkIcon}></img>
                                            <span className={styles.shareText}>Share</span>
                                        </button>
                                        <img src={threePerson}></img>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Homepage