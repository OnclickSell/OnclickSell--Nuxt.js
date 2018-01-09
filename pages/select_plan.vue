<template>
    <div>
      <logo/>

        <div class='l-plans'>

            <div class='plans__item plans__item--prograss-bar'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>

            <div class='plans__item plans__item-top-margin'>
                <os-plan colour="blue" value='$30' :features="features" :description="description" buttonText='GO WITH PRIMARY' >
                    <h1 slot="title">Primary</h1>
                </os-plan>
            </div>

            <div class='plans__item'>
                <os-plan colour="green" value='$30' :features="features" :description="description" buttonText='GO WITH PRIMARY'  :active="true">
                    <h1 slot="title">Primary</h1>
                </os-plan>
            </div>

            <div class='plans__item'>
                <os-plan colour="purple" value='$30' :features="features" :description="description" buttonText='GO WITH PRIMARY' >
                    <h1 slot="title">Primary</h1>
                </os-plan>
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
    'os-plan': Plan
  }
}
</script>

<style lang='scss'>

@import '../Shared/assets/CSS-Layout-system.scss';
@import '../Shared/assets/OnclickSell.com--css--config.scss';




.l-plans {
    @include layout--container;
    padding: 20px;
    @media only screen  and (min-width : 768px) {
        padding: 0 12px;
    }

    @media all and (min-width: 768px) {
       padding: 0 25px;
    }
}

.plans__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);

    @media all and (min-width: 768px) {
        width: layout--item--width(3, 4, true);
        margin: 0;
    }
}


.plans__item--prograss-bar {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    margin-bottom: 10%;

    @media all and (min-width: 960px) {
        margin-bottom: 15%;
    }

}



</style>
