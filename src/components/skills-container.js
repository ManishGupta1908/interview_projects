import styled from "styled-components";

const Skills = styled.div`
  position: relative;
  font-weight: 500;
`;
const SkillsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CloseIcon = styled.img`
  position: relative;
  border-radius: 15px;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;
const UiuxAndDesignParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
const FrameWrapper = styled.div`
  border-radius: 22px;
  background-color: #ddedff;
  display: flex;
  flex-direction: row;
  padding: 6px 8px 6px 10px;
  align-items: center;
  justify-content: flex-end;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #dde5ea;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const TypeHereWrapper = styled.div`
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #dde5ea;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -1px;
  text-align: center;
  font-size: 14px;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 12px;
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  text-align: center;
  font-size: 16px;
  color: #1c4980;
  font-family: Inter;
`;
const SkillsContainer = () => {
  return (
    <FrameParentRoot>
      <SkillsWrapper>
        <Skills>Skills</Skills>
      </SkillsWrapper>
      <FrameGroup>
        <FrameContainer>
          <FrameDiv>
            <FrameWrapper>
              <UiuxAndDesignParent>
                <Skills>UI/UX and Design</Skills>
                <CloseIcon alt="" src="/close.svg" />
              </UiuxAndDesignParent>
            </FrameWrapper>
            <FrameWrapper>
              <UiuxAndDesignParent>
                <Skills>No of Question</Skills>
                <CloseIcon alt="" src="/close.svg" />
              </UiuxAndDesignParent>
            </FrameWrapper>
            <FrameWrapper>
              <UiuxAndDesignParent>
                <Skills>Web Development</Skills>
                <CloseIcon alt="" src="/close.svg" />
              </UiuxAndDesignParent>
            </FrameWrapper>
          </FrameDiv>
          <FrameDiv>
            <FrameWrapper>
              <UiuxAndDesignParent>
                <Skills>UI/UX and Design</Skills>
                <CloseIcon alt="" src="/close.svg" />
              </UiuxAndDesignParent>
            </FrameWrapper>
            <FrameWrapper>
              <UiuxAndDesignParent>
                <Skills>Web Development</Skills>
                <CloseIcon alt="" src="/close.svg" />
              </UiuxAndDesignParent>
            </FrameWrapper>
          </FrameDiv>
        </FrameContainer>
        <TypeHereWrapper>
          <Skills>Type here</Skills>
        </TypeHereWrapper>
      </FrameGroup>
    </FrameParentRoot>
  );
};

export default SkillsContainer;
