const container = document.querySelector(".container")

                        /* DISPLAY FLEX */

const displayFlex = document.querySelector("#buttonDisplayFlex")

displayFlex.addEventListener("click", changeFlex)

function changeFlex() {
    container.style.display = "flex";
    //container.style.alignItems = "center"
    //container.style.gap = "10px"
    //container.style.alignItems = "center"
    //container.style.flexDirection = "column-reverse"
}

                              /* JUSTIFY CONTENT */

const Justify_Content_center = document.querySelector("#JustifyContentCenter")
const Justify_Content_flexStar = document.querySelector("#JustifyContentStar")
const Justify_Content_flexEnd = document.querySelector("#JustifyContentEnd")
const Justify_Content_SpaceBetween = document.querySelector("#JustifyContentSpaceBetween")
const Justify_Content_SpaceAround = document.querySelector("#JustifyContentSpaceAround")

Justify_Content_center.addEventListener("click", justifyCenter)
Justify_Content_flexStar.addEventListener("click", justifyStar)
Justify_Content_flexEnd.addEventListener("click", justifyEnd)
Justify_Content_SpaceBetween.addEventListener("click", JustifySpaceBetween)
Justify_Content_SpaceAround.addEventListener("click", JustifySpaceAround)

function justifyCenter(){
    container.style.justifyContent = 'center';
}

function justifyStar() {
    container.style.justifyContent = 'flex-start';

}
function justifyEnd() {
    container.style.justifyContent = 'flex-end';

}
function JustifySpaceBetween() {
    container.style.justifyContent = 'space-between';

}
function JustifySpaceAround() {
    container.style.justifyContent = 'space-around';

}
                              /* Flex Direction */

const Flex_Direction_Row = document.querySelector("#FlexDirectionRow")
const Flex_Direction_Row_Reverse = document.querySelector("#FlexDirectionRowReverse")
const Flex_Direction_Column = document.querySelector("#FlexDirectionColumn")
const Flex_Direction_Column_Reverse = document.querySelector("#FlexDirectionColumnReverse")

Flex_Direction_Row.addEventListener("click", flexRow)
Flex_Direction_Row_Reverse.addEventListener("click", flexRowReverse)
Flex_Direction_Column.addEventListener("click", flexColumn)
Flex_Direction_Column_Reverse.addEventListener("click", flexColumnReverse)

function flexRow(){
    container.style.flexDirection = 'row';
}

function flexRowReverse() {
    container.style.flexDirection = 'row-reverse';

}
function flexColumn() {
    container.style.flexDirection = 'column';

}
function flexColumnReverse() {
    container.style.flexDirection = 'column-reverse';

}
                              /* Align Items */

const Align_Items_Flex_Start = document.querySelector("#AlignItemsFlexStart")
const Align_Items_Flex_End = document.querySelector("#AlignItemsFlexEnd")
const Align_Items_Flex_Center = document.querySelector("#AlignItemsFlexCenter")
const Align_Items_Flex_Baseline = document.querySelector("#AlignItemsFlexBaseline")

Align_Items_Flex_Start.addEventListener("click", alignStart)
Align_Items_Flex_End.addEventListener("click", alignEnd)
Align_Items_Flex_Center.addEventListener("click", alignCenter)
Align_Items_Flex_Baseline.addEventListener("click", alignBaseline)

function alignStart(){
    container.style.alignItems = 'flex-start';
}

function alignEnd() {
    container.style.alignItems = 'flex-end';

}
function alignCenter() {
    container.style.alignItems = 'center';

}
function alignBaseline() {
    container.style.alignItems = 'stretch';

}