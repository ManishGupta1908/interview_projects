import { useState, useCallback } from "react";
import FrameComponent1 from "./frame-component1";
import PortalPopup from "./portal-popup";
import styled from "styled-components";

const AssessmentsOverview = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const TotalAssessment = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const FrameChild = styled.img`
  position: relative;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const B = styled.b`
  position: relative;
  line-height: 140%;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 20px;
`;
const TotalAssessmentParent = styled.div`
  align-self: stretch;
  background-color: #fff;
  width: 162px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const FrameItem = styled.img`
  align-self: stretch;
  position: relative;
  max-height: 100%;
  width: 1px;
`;
const Div = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 140%;
  font-weight: 500;
  color: #05c165;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
const TotalCandidate = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 140%;
  font-weight: 500;
`;
const FrameParent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1px;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 1px;
  height: 40px;
`;
const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  font-size: 20px;
`;
const CandidatesParent = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const CandidatesSourceParent = styled.div`
  align-self: stretch;
  background-color: #fff;
  width: 499px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const TotalPurposeParent = styled.div`
  align-self: stretch;
  background-color: #fff;
  width: 188px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 50px 16px 20px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const FrameGroup = styled.div`
  border-radius: 12px;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  width: 1226px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1px;
  font-size: 14px;
`;
const AssessmentsOverviewParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const FrameChild6 = styled.div`
  border-radius: 70px;
  background-color: #fff;
  width: 40px;
  height: 40px;
`;
const FrameWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MyAssessmentParent = styled.div`
  width: 1224px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
const AddIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AddWrapper = styled.div`
  border-radius: 72px;
  background-color: #fff;
  width: 70px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const NewAssessment = styled.div`
  position: relative;
  font-weight: 500;
`;
const FrameParent13 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  z-index: 0;
`;
const FromHereYou = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  z-index: 1;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -19px;
  left: 470px;
  width: 149px;
  height: 149px;
  z-index: 2;
`;
const FrameParent12 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 12px;
  background-color: #f6f8fa;
  border: 1px dashed #dadce0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 12px;
  cursor: pointer;
  text-align: center;
`;
const FrameChild7 = styled.img`
  position: relative;
  border-radius: 12px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Job = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
  display: inline-block;
  width: 26px;
  height: 20px;
  flex-shrink: 0;
`;
const FrameChild8 = styled.img`
  position: relative;
  width: 1px;
  height: 16px;
`;
const CalendarTodayIcon = styled.img`
  position: relative;
  width: 14px;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const CalendarTodayParent = styled.div`
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-size: 12px;
  color: #8da4bf;
`;
const JobParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 14px;
`;
const MathAssessmentParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
`;
const FrameParent16 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
const DotIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const DotWrapper = styled.div`
  border-radius: 50px;
  background-color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const FrameParent15 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 0;
`;
const FrameChild9 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1px;
  flex-shrink: 0;
  z-index: 1;
`;
const Duration = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 140%;
  font-weight: 500;
  margin-top: -1px;
`;
const Parent3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent18 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;
const LinkIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LinkParent = styled.div`
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #1c4980;
  box-sizing: border-box;
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 2px 8px 2px 6px;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const Lp = styled.b`
  position: relative;
`;
const LpWrapper = styled.div`
  border-radius: 32.73px;
  background-color: #6548ee;
  border: 1px solid #fff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 5px 6px;
  align-items: flex-end;
  justify-content: center;
`;
const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
`;
const FrameParent19 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const FrameParent17 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  font-size: 14px;
`;
const FrameChild10 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0px;
  width: 58px;
  height: 49px;
  z-index: 3;
`;
const FrameParent14 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #dadce0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 16px;
`;
const LpFrame = styled.div`
  border-radius: 32.73px;
  background-color: #3079e1;
  border: 1px solid #fff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 5px 6px;
  align-items: flex-end;
  justify-content: center;
  margin-left: -15.59px;
`;
const LpWrapper1 = styled.div`
  border-radius: 32.73px;
  background-color: #e9407a;
  border: 1px solid #fff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 5px 6px;
  align-items: flex-end;
  justify-content: center;
  margin-left: -15.59px;
`;
const FrameParent26 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameParent11 = styled.div`
  width: 1224px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
`;
const FrameChild15 = styled.div`
  width: 1224px;
`;
const FrameParent10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapperRoot = styled.div`
  align-self: stretch;
  border-radius: 0px 0px 12px 12px;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
  text-align: left;
  font-size: 18px;
  color: #1c4980;
  font-family: Inter;
`;
const AssessmentContainer = () => {
  const [isFrame2Open, setFrame2Open] = useState(false);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <FrameWrapperRoot>
        <FrameContainer>
          <FrameParent>
            <AssessmentsOverviewParent>
              <AssessmentsOverview>Assessments Overview</AssessmentsOverview>
              <FrameGroup>
                <TotalAssessmentParent>
                  <TotalAssessment>Total Assessment</TotalAssessment>
                  <FrameDiv>
                    <FrameChild alt="" src="/frame-10000091002.svg" />
                    <B>34</B>
                  </FrameDiv>
                </TotalAssessmentParent>
                <FrameItem alt="" src="/vector-251.svg" />
                <CandidatesParent>
                  <TotalAssessment>Candidates</TotalAssessment>
                  <FrameParent1>
                    <FrameChild alt="" src="/frame-10000093531.svg" />
                    <FrameParent2>
                      <Parent1>
                        <B>11,145</B>
                        <Div>+89</Div>
                      </Parent1>
                      <TotalCandidate>Total Candidate</TotalCandidate>
                    </FrameParent2>
                    <VectorIcon alt="" src="/vector-2501.svg" />
                    <FrameParent2>
                      <Parent1>
                        <B>1,14</B>
                        <Div>+89</Div>
                      </Parent1>
                      <TotalCandidate>Who Attamped</TotalCandidate>
                    </FrameParent2>
                  </FrameParent1>
                </CandidatesParent>
                <FrameItem alt="" src="/vector-251.svg" />
                <CandidatesSourceParent>
                  <TotalAssessment>Candidates Source</TotalAssessment>
                  <FrameParent1>
                    <FrameChild alt="" src="/frame-10000058321.svg" />
                    <FrameParent2>
                      <Parent1>
                        <B>11,000</B>
                        <Div>+89</Div>
                      </Parent1>
                      <TotalCandidate>E-mail</TotalCandidate>
                    </FrameParent2>
                    <VectorIcon alt="" src="/vector-2501.svg" />
                    <FrameParent2>
                      <Parent1>
                        <B>145</B>
                        <Div>+89</Div>
                      </Parent1>
                      <TotalCandidate>Social Share</TotalCandidate>
                    </FrameParent2>
                    <VectorIcon alt="" src="/vector-2501.svg" />
                    <FrameParent2>
                      <Parent1>
                        <B>145</B>
                        <Div>+89</Div>
                      </Parent1>
                      <TotalCandidate>Unique Link</TotalCandidate>
                    </FrameParent2>
                  </FrameParent1>
                </CandidatesSourceParent>
                <FrameItem alt="" src="/vector-251.svg" />
                <TotalPurposeParent>
                  <TotalAssessment>Total Purpose</TotalAssessment>
                  <FrameDiv>
                    <FrameChild alt="" src="/frame-10000091003.svg" />
                    <B>11</B>
                  </FrameDiv>
                </TotalPurposeParent>
              </FrameGroup>
            </AssessmentsOverviewParent>
            <AssessmentsOverviewParent>
              <MyAssessmentParent>
                <AssessmentsOverview>My Assessment</AssessmentsOverview>
                <FrameWrapper1>
                  <FrameChild6 />
                </FrameWrapper1>
              </MyAssessmentParent>
              <FrameParent10>
                <FrameParent11>
                  <FrameParent12 onClick={openFrame2}>
                    <FrameParent13>
                      <AddWrapper>
                        <AddIcon alt="" src="/add4.svg" />
                      </AddWrapper>
                      <NewAssessment>New Assessment</NewAssessment>
                    </FrameParent13>
                    <FromHereYou>
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </FromHereYou>
                    <VectorIcon1 alt="" src="/vector2.svg" />
                  </FrameParent12>
                  <FrameParent14>
                    <FrameParent15>
                      <FrameParent16>
                        <FrameChild7 alt="" src="/frame-10000087031.svg" />
                        <MathAssessmentParent>
                          <AssessmentsOverview>
                            Math Assessment
                          </AssessmentsOverview>
                          <JobParent>
                            <Job>Job</Job>
                            <FrameChild8 alt="" src="/vector-3331.svg" />
                            <CalendarTodayParent>
                              <CalendarTodayIcon
                                alt=""
                                src="/calendar-today.svg"
                              />
                              <NewAssessment>20 Apr 2023</NewAssessment>
                            </CalendarTodayParent>
                          </JobParent>
                        </MathAssessmentParent>
                      </FrameParent16>
                      <DotWrapper>
                        <DotIcon alt="" src="/3-dot2.svg" />
                      </DotWrapper>
                    </FrameParent15>
                    <FrameChild9 alt="" src="/vector-3321.svg" />
                    <FrameParent17>
                      <FrameParent18>
                        <Parent3>
                          <TotalAssessment>00</TotalAssessment>
                          <Duration>Duration</Duration>
                        </Parent3>
                        <Parent3>
                          <TotalAssessment>00</TotalAssessment>
                          <Duration>Questions</Duration>
                        </Parent3>
                      </FrameParent18>
                      <FrameParent19>
                        <LinkParent>
                          <LinkIcon alt="" src="/link11.svg" />
                          <AssessmentsOverview>Share</AssessmentsOverview>
                        </LinkParent>
                        <FrameWrapper2>
                          <LpWrapper>
                            <Lp>LP</Lp>
                          </LpWrapper>
                        </FrameWrapper2>
                      </FrameParent19>
                    </FrameParent17>
                    <FrameChild10 />
                  </FrameParent14>
                  <FrameParent14>
                    <FrameParent15>
                      <FrameParent16>
                        <FrameChild7 alt="" src="/frame-10000087031.svg" />
                        <MathAssessmentParent>
                          <AssessmentsOverview>
                            Math Assessment
                          </AssessmentsOverview>
                          <JobParent>
                            <Job>Job</Job>
                            <FrameChild8 alt="" src="/vector-3331.svg" />
                            <CalendarTodayParent>
                              <CalendarTodayIcon
                                alt=""
                                src="/calendar-today1.svg"
                              />
                              <NewAssessment>20 Apr 2023</NewAssessment>
                            </CalendarTodayParent>
                          </JobParent>
                        </MathAssessmentParent>
                      </FrameParent16>
                      <DotWrapper>
                        <DotIcon alt="" src="/3-dot2.svg" />
                      </DotWrapper>
                    </FrameParent15>
                    <FrameChild9 alt="" src="/vector-3321.svg" />
                    <FrameParent17>
                      <FrameParent18>
                        <Parent3>
                          <TotalAssessment>00</TotalAssessment>
                          <Duration>Duration</Duration>
                        </Parent3>
                        <Parent3>
                          <TotalAssessment>00</TotalAssessment>
                          <Duration>Questions</Duration>
                        </Parent3>
                      </FrameParent18>
                      <FrameParent19>
                        <LinkParent>
                          <LinkIcon alt="" src="/link12.svg" />
                          <AssessmentsOverview>Share</AssessmentsOverview>
                        </LinkParent>
                        <FrameWrapper2>
                          <FrameParent26>
                            <LpWrapper>
                              <Lp>LP</Lp>
                            </LpWrapper>
                            <LpFrame>
                              <Lp>LP</Lp>
                            </LpFrame>
                            <LpWrapper1>
                              <Lp>LP</Lp>
                            </LpWrapper1>
                          </FrameParent26>
                        </FrameWrapper2>
                      </FrameParent19>
                    </FrameParent17>
                    <FrameChild10 />
                  </FrameParent14>
                </FrameParent11>
                <FrameChild15 />
              </FrameParent10>
            </AssessmentsOverviewParent>
          </FrameParent>
        </FrameContainer>
      </FrameWrapperRoot>
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent1 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default AssessmentContainer;
