<template>
    <div class="form__row">
        <label class="form__label">{{ label }}</label>
        <multiselect class="companies-multiselect" v-model="value" :limit="2" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name">
            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
        </multiselect>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        label: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            value: []
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../assets/library/multiselect.css';

.form {
    &__row {
        position: relative;
        width: 100%;
    }

    &__label {
        display: inline-block;
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(#1D245280, .5);
    }
}
</style>

<style lang="scss">
.companies-multiselect.multiselect {
   .multiselect {
       &__tags {
           padding-right: 8px;
           padding-left: 8px;
           width: 100%;
           height: 40px;
           appearance: none;
           font-family: 'Inter', sans-serif;
           font-size: 16px;
           font-weight: 400;
           color: #1D2452;
           background: #fff;
           border: 1px solid rgba(#1D24521A, .1);
           border-radius: 8px;
           outline: none;
           transition: .2s;
       }

       &__tag {
           padding: 4px 26px 4px 8px;
           background: #F4F4FF;
           border-radius: 5px;
           font-size: 14px;
           line-height: 20px;
           font-weight: 500;
           color: #1D2452;

           i {
               top: 2px;
           }
       }

       &__tag-icon {
           &:after {
               color: rgba(#1D2452, .25);
           }
           &:focus,
           &:hover {
               background: initial;
           }
       }
   }
}
</style>