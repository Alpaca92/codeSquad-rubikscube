# Rubik's cube 구현하기

## 1단계: 단어 밀어내기 구현하기

- 100이상, -100미만의 값은 Error message가 출력되도록 함
- r과 R, l과 L의 대소문자 모두 사용을 위해 대문자로 변환하여 통일시킴
- 입력된 N값이 단어의 길이의 배수라면 그 단어 그대로 출력 되므로 %을 사용
- -N의 값을 같는 L과 N의 값을 같는 R은 같은 동작을 함
- 위의 경우를 제외하면 모두 같은 동작을 하므로 else로 처리함