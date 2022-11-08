const Things = () => {
    const things_text = [
        'LG토지주택공사',
        '왜 우리 LG에 지원하게 되었는가?',
        '업무와 무관한 일을 시켜도 잘 수행할 것인가?',
        '입사 후 보고서를 만들어 보고하는 경우가 생긴다면 어떤 식으로 준비를 할 것인가?',
        '(전형 과제로)기획한 프로그램은 어떤 경위로 기획하게 되었는지 설명하라.',
        '국민건강보험공단',
        '악성민원 대처방법은?',
        '사회보장 제도란 무엇이라 생각하나?',
        '가장 좋아했던 수업은 무엇이었나?',
        '지원자가 번아웃을 극복하는 방법은 무엇인가?',
        '4대보험의 종류로는 무엇이 있는가?',
        '국민연금공단',
        '면접을 마치고 무엇을 할 것인지?',
        '국민연금제도가 무엇이라고 생각하는가?',
        '자신이 생각하는 창의적인 인물은?',
        '민원인을 대할 때 가장 필요한 역량은 무엇인가?',
        '잘 모르는 내용의 민원전화가 걸려왔을 경우 대처방법은?',
        'SK하이닉스 - 오퍼레이터&메인터넌스',
        '회사가 나를 뽑아야 하는 이유에 대해서 말해보라.',
        '직장상사와의 갈등상황을 어떻게 대처할 것인가?',
        '오퍼레이터와 메인터넌스의 차이점에 대해서 말해보라.',
        '왜 SK하이닉스인가?',
        '오퍼레이터로서 일하게 될 때 예상되는 문제점은 무엇인가?',
        'SK하이닉스의 핵심 가치에 대한 질문(핵심 가치 아는가?)',
        '구체적으로 어느 라인에서 근무하고 싶은가?',
        '정말 독하닥 싶을 정도로 매달려 본 일이 있는가?',
        '리더쉽을 발휘한 경험을 말해달라.',
        '금*그룹',
        '매일 신문을 보십니까?',
        '신문을 보면 가장 먼저 어떤 면을 보십니까?',
        '만약 하기 싫은 일이 주언진다면 어떻게 하시겠습니까?',
        '친구가 많습니까?',
        '기아 자동차 그룹',
        '사회봉사활동을 한 경험에 대해 말씀해 보십시오.',
        '시사문제(자동차 10부제 운행 등)에 대한 집단토의',
        'N심',
        '장기적으로 볼 때 가격의 결정 요인이 되는 것은 무엇입니까?',
        '공개 시장정책에 대해 말해 보십시오.',
        '대우증권',
        '평소 신조로 삼고 있는 좌우명은 무엇입니까?',
        '증권회사의 업무내용이 무엇인지 알고 계십니까?',
        '대학에서 배운 학문을 증권업무에 어떻게 활용하시겠습니까?',
        'OECD가입이 우리 경제에 미치는 영향에 대해 말씀해 주십시오.',
        '롯데그룹',
        '당시에 대해 어떤 이미지를 갖고 있습니까?',
        '학교생활 중 가장 슬펐던 일은 무엇입니까?',
        '아시아나 항공',
        '세계에서 가장 좋은 항공사는 어디라고 생각합니까?',
        '아니아나 항공에 대해 어떻게 생각하십니까?',
        '외환은행',
        '좋아하는 과목은 무엇이었습니까?',
        '시중은행과 특수은행의 차이점에 대해 말해보시오.',
        '좋아하는 운동은 무엇입니까?',
        '이랜*',
        '영어로 자기소개를 해보시오.',
        '귀하의 생활신조는 무엇입니까?',
        '간단히 자기 PR을 해보시오.',
        '이랜* 옷의 성격이 어떻습니까?',
        '기독생활에 충실합니까?',
        '한국가스공사',
        '귀하는 조직과 의견이 일치하지 않을 경우 어떻게 하겠습니까?',
        '최근 읽은 책의 제목과 느낀 소감은?',
        '한국IBM',
        '입사하게 되었을 경우, 회사에 바라고 싶은 것이 있다면 말해보십시오.',
        '다국적 기업에 대해 어떻게 생각하는가?',
        '자신의 컴퓨터 실력은 어느 정도라고 생각하는가?',
        '한국은행',
        '지금까지 살아온 일 중에서 자기에게 변화를 준 사건이 있다면 그 이유는 무엇입니까?',
        '한국은행과 시중은행의 다른 점을 말해보시오.',
        '한국투자신탁',
        '10년 후, 당신은 어디서 무엇을 하고 있으리라 생각합니까?',
        '오늘 아침 조간신문에서 본 인상 깊은 뉴스를 한 가지 들고 그에 대한 느낌을 말해 보십시오.',
        '리스 산업에 대해 말해보시오.',
        '무역 카르텔에 대해 보십시오.',
        '국민은행',
        '생활 신조를 말해보시오.',
        '대기업과 은행 중 어느 것을 선호하는가?',
        '엥겔계수란 무엇입니까?'
        ]
    return (
        <div className="Things">
            {
                things_text.map((things_text, index) => {
                    return (
                        <div>
                            {
                                index===0 || index===5 || index===11 || index===17 || index=== 27|| index===32 || index===35 || index===38 || index ===43 || index===46 || index===49 || index === 53 || index===59 || index===62 || index===66 || index===69 || index===74 ? <p className="accent"><br />{things_text}</p> : <p className="text">{things_text}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Things;