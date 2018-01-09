<template>
    <div>
      <logo/>
        <div class='backend'>
            <div class='backend__item fluid'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>
            <div class='backend__item fluid backend__item--top-margin'><os-input-help/></div>
            <div class='backend__item'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='backend__item'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='backend__item fluid'><os-input-help/></div>
            <div class='backend__item fluid'>
                <os-input--checkbox title='Have you used any framework?' :options="['Yes', 'No']"/>
            </div>

                    
            <div class='backend__item'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='backend__item'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='backend__item fluid'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='backend__item fluid'>
                <os-button title='NEXT'/>
            </div>

            <div class='backend__item fluid'>
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
import Plan from '~/Sell_pages/components/plan.vue'
import DropDown from '~/Sell_pages/components/input--drop-down.vue'
import InputCheckbox from '~/Sell_pages/components/input--checkbox.vue'

export default {
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size'
    }
  },
  components: {
    Logo,
    'os-footer': OSFooter,
    'os-progress-bar': PrograssBar,
    'os-input': Input,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-explainer': Explainer,
    'os-input-help': InputHelp,
    'os-plan': Plan,
    'os-input--drop-down': DropDown,
    'os-input--checkbox': InputCheckbox
  }
}
</script>

<style lang='scss'>

@import '../../Shared/assets/CSS-Layout-system.scss';
@import '../../Shared/assets/OnclickSell.com--css--config.scss';




.backend {
    @include layout--container;
    width: 100%;
    padding: 20px;

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(3, 1);
    }
}

.backend__item {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    padding: 12px 8px;
    margin: 0;
}

.backend__item--float {
    width: layout--item--width(1, 12, true);
    margin: 0;

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
    }

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(2, 5, false);
    }
}

.backend__item--top-margin {
    margin-top: 10%;
}

</style>
