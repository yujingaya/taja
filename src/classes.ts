type Class = {
  title: string;
  keys: string[];
  name: string;
  isReady: boolean;
  words? : string[];
};

type Category = {
  title: string;
  classes: Class[];
};

export const categories: Category[] = [{
  title: '기초',
  classes: [{
    title: '띄우기, 줄 바꾸기, 지우기',
    keys: ['space', 'enter', 'delete'],
    name: '띄우기, 줄 바꾸기, 지우기',
    isReady: false,
  }],
}, {
  title: '단어',
  classes: [{
    title: '제자리',
    keys: 'ㅁㄴㅇㄹㅎㅗㅓㅏㅣ'.split(''),
    name: '제자리 단어 연습',
    isReady: true,
    words: [
      // ㅁㄴㅇㄹㅎㅗㅓㅏㅣ,
      '모란', '멀어', '마니아', '만남', '말랑말랑', '민머리', '밀',
      '노란', '너머', '남한', '나라', '언니',
      '오리', '외로이', '인망', '인라인', '완화',
      '로망', '로미오', '이러한', '라인',
      '환호', '허리', '한마디', '하나',
    ],
  }, {
    title: '윗줄 자음',
    keys: 'ㅂㅈㄷㄱㅅ'.split(''),
    name: '윗줄 자음 단어 연습',
    isReady: true,
    words: [
      // ㅂㅈㄷㄱㅅ
      '바보', '알밥', '마법', '보라돌이', '비바람',
      '조종', '절', '만족', '미리', '잔디', '지진',
      '다짐', '도리', '담담한', '디자이너', '더럽다', '닭',
      '간단', '일과', '과학', '긴밀', '기적', '고기',
      '속담', '산모', '모시', '서리', '성공',
    ],
  }, {
    title: '아랫줄 자음',
    keys: 'ㅋㅌㅊㅍ'.split(''),
    name: '아랫줄 자음 단어 연습',
    isReady: true,
    words: [
      // ㅋㅌㅊㅍ
      '조카', '커피', '콜라', '킬로미터', '리모컨', '키높이',
      '터미널', '토마토', '토론회', '탈락', '퇴임', '털털',
      '참외', '초파리', '취미', '치마', '밑창', '아침',
      '파티', '타피오카', '파마머리', '피아노', '파란만장',
    ],
  }, {
    title: '검지로 치는 모음',
    keys: 'ㅛㅕㅗㅓㅠㅜㅡ'.split(''),
    name: '검지로 치는 모음 연습',
    isReady: true,
    words: [
      // ㅛㅕㅠㅜㅡ
      '요물', '분뇨', '묘지', '음료', '미용', '효과',
      '남녀', '며느리', '영어', '영국', '현물', '명령',
      '유물', '뉴욕', '유명', '인류', '우유',
      '우물', '울림', '무리', '물론', '무늬',
      '의리', '이름', '하늘', '으르렁', '여름', '희망', '희귀',
    ],
  }, {
    title: '나머지 모음',
    keys: 'ㅑㅏㅐㅣㅔ'.split(''),
    name: '나머지 모음 연습',
    isReady: true,
    words: [
      // ㅑㅐㅔ
      '야인시대', '양말', '향상', '냠냠', '그냥', '얌체', '모양', '얄밉다', '야학', '모략',
      '해마', '매일', '아내', '내노라하다', '애인', '노래', '아래', '오래',
      '메모', '멜라닌', '동네', '네모', '에너지', '레몬', '모레', '헤아리다', '헤매다',
    ],
  }],
}, {
  title: '문장',
  classes: [{
    title: '문장 부호',
    keys: '`190,./'.split(''),
    name: '문장 부호',
    isReady: false,
  }, {
    title: '문장',
    keys: [],
    name: '문장 연습',
    isReady: false,
  }, {
    title: '글',
    keys: [],
    name: '글 연습',
    isReady: false,
  }],
}, {
  title: '게임',
  classes: [{
    title: '땅따먹기',
    keys: [],
    name: '땅따먹기',
    isReady: false,
  }],
}];

export const classes = categories.flatMap((category) => category.classes);
export const classTitleToWords = Object.fromEntries(classes.map((c) => [c.name, c.words]));
export const readyClasses = classes.filter((c) => c.isReady);
