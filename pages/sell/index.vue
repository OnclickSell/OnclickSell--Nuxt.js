<template>
    <div>
      <logo/>

        <div class='l-basic-info'>

            <div class='basic-info__item'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>

            <div class='basic-info__item basic-info__input'>
                <os-input-help/>
                <os-input placeholder='Laravel 5.5.5 Full Api' title='Project title'/>
            </div>

            <div class='basic-info__item basic-info__textarea'>
                <os-input-help/>
                <os-textarea title='Application  Description'/>
            </div>

            <div class='basic-info__item'>
                <os-button title='NEXT'/>
            </div>

            <div class='basic-info__item basic-info__input--top-margin'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
            </div> 

        </div>
      <!-- <os-footer/> -->
    </div>
</template>

<script>
import Logo from '~/Shared/components/Navbar.vue'
import OSFooter from '~/Shared/components/Footer.vue'
import Explainer from '~/Shared/components/explainer.vue'
import PrograssBar from '~/Sell_pages/components/Progress--bar.vue'
import Input from '~/Sell_pages/components/input.vue'
import Textarea from '~/Sell_pages/components/textarea.vue'
import Button from '~/Sell_pages/components/button.vue'
import InputHelp from '~/Sell_pages/components/input--help.vue'

export default {
  components: {
    Logo,
    'os-footer': OSFooter,
    'os-progress-bar': PrograssBar,
    'os-input': Input,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-explainer': Explainer,
    'os-input-help': InputHelp
  }
}
</script>

<style lang='scss'>

@import '../../Shared/assets/CSS-Layout-system.scss';
@import '../../Shared/assets/OnclickSell.com--css--config.scss';


.l-basic-info {
    @include layout--container;
    position: relative;
    padding: 5px;
}

.basic-info__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    margin-top: 5%;

    @media all and (min-width: 599px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(1, 1);
    }

    @media all and (min-width: 960px) {
        width: layout--item--width(1, 9, false);
        @include layout--item--offset(8, 2);
    }
}

.basic-info__input {
    margin-top: 40%;
}

.basic-info__textarea {
    margin-top: 20%;
}

.basic__info--explainer {
    margin-top: 20%;
}

</style>
