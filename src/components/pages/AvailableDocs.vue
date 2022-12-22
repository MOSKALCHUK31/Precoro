<template>
    <div class="docs">
        <div class="docs__content">
            <accordion>
                <accordion-item :count="count" title="Precoro">
                   <div class="docs-main">
                       <div class="docs-main__select-all">
                           <form-row-checkbox id="select-all-docs" label="Select All Document Custom Fields" name="select-all-docs" :disabled="disabled"></form-row-checkbox>
                       </div>
                       <div class="categories">
                           <div class="categories__label">Available Document Custom Fields</div>
                           <div class="categories__content">
                               <div class="categories__block">
                                   <div class="category-tile">
                                       <div class="category-tile__title">Classes</div>
                                       <div class="category-tile__select-all">
                                           <form-row-checkbox id="select-all-classes" label="Select All" name="select-all-classes" :disabled="disabled"></form-row-checkbox>
                                       </div>
                                       <ul class="category-tile__list">
                                           <li class="category-tile__item">
                                               <form-row-parent-checkbox parent-id="class-1" parent-name="class-1" parent-label="Class 1" :child-elements="firstClassChilds" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-parent-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-parent-checkbox parent-id="class-2" parent-name="class-2" parent-label="Class 2" :child-elements="secondClassChilds" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-parent-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="class-3" label="Class 3" name="class-3" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="class-4" label="Class 4" name="class-4" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div class="categories__block">
                                   <div class="category-tile">
                                        <div class="category-tile__title">Departments</div>
                                        <div class="category-tile__select-all">
                                            <form-row-checkbox id="select-all-departments" label="Select All" name="select-all-departments" :disabled="disabled"></form-row-checkbox>
                                        </div>
                                       <ul class="category-tile__list">
                                           <li class="category-tile__item">
                                               <form-row-parent-checkbox parent-id="developer-1" parent-name="developer-1" parent-label="Developer" :child-elements="developersChilds" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-parent-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="developer-2" label="2nd Sub-Developers" name="Developer-2" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="developer-3" label="3nd Sub-Developers" name="Developer-3" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="developer-4" label="Developers-4" name="developer-4" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="developer-5" label="Developers-5" name="developer-5" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div class="categories__block">
                                   <div class="category-tile">
                                       <div class="category-tile__title">DCF 3</div>
                                       <div class="category-tile__select-all">
                                           <form-row-checkbox id="select-all-dcf" label="Select All" name="select-all-dcf" :disabled="disabled"></form-row-checkbox>
                                       </div>
                                       <ul class="category-tile__list">
                                           <li class="category-tile__item">
                                               <form-row-parent-checkbox parent-id="class-1-dcf" parent-name="class-1-dcf" parent-label="Class 1 DCF" :child-elements="firstClassChilds" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-parent-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-parent-checkbox parent-id="class-2-dcf" parent-name="class-2-dcf" parent-label="Class 2 DCF" :child-elements="secondClassChilds" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-parent-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="class-3" label="Class 3 DCF" name="class-3-dcf" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                           <li class="category-tile__item">
                                               <form-row-checkbox id="class-4" label="Class 4 DCF" name="class-4-dcf" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </accordion-item>
                <accordion-item :count="0" title="Precoro Development">
                    test content => ...
                </accordion-item>
                <accordion-item :count="0" title="Procurement">
                    test content => ...
                </accordion-item>
            </accordion>
        </div>
        <div class="docs__actions">
            <the-button link to="/roles" size="medium" color="blue" @click="handleSubmit">Next Step</the-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            disabled: 'getInputState'
        })
    },
    data() {
        return {
            count: 0,
            firstClassChilds: [
                { id: 'class-1-child-1', label: 'Class 1 child 1', name: 'class-1-child-1' },
                { id: 'class-1-child-2', label: 'Class 1 child 2', name: 'class-1-child-2' },
                { id: 'class-1-child-3', label: 'Class 1 child 3', name: 'class-1-child-3' },
            ],
            secondClassChilds: [
                { id: 'class-2-child-1', label: 'Class 2 child 1', name: 'class-2-child-1' },
                { id: 'class-2-child-2', label: 'Class 2 child 2', name: 'class-2-child-2' },
                { id: 'class-2-child-3', label: 'Class 2 child 3', name: 'class-2-child-3' },
            ],
            developersChilds: [
                { id: 'dev-1-child-1', label: 'dev 1 child 1', name: 'dev-1-child-1' },
                { id: 'dev-1-child-2', label: 'dev 1 child 2', name: 'dev-1-child-2' },
                { id: 'dev-1-child-3', label: 'dev 1 child 3', name: 'dev-1-child-3' },
            ],
            firstDCFChilds: [
                { id: 'class-1-child-1', label: 'Class 1 child 1', name: 'class-1-child-1' },
                { id: 'class-1-child-2', label: 'Class 1 child 2', name: 'class-1-child-2' },
                { id: 'class-1-child-3', label: 'Class 1 child 3', name: 'class-1-child-3' },
            ],
            secondDCFChilds: [
                { id: 'dcf-1-child-1', label: 'Dcf 1 child 1', name: 'dcf-1-child-1' },
                { id: 'dcf-1-child-2', label: 'Dcf 1 child 2', name: 'dcf-1-child-2' },
                { id: 'dcf-1-child-3', label: 'Dcf 1 child 3', name: 'dcf-1-child-3' },
            ],
        }
    },
    methods: {
        handleSetQuantity(payload) {
            if (payload) this.count = this.count + 1
            else this.count = this.count - 1
        },
        handleSubmit() {
            this.$store.dispatch('HANDLE_CONFIRM_DOCS_ACTION')
        }
    }
}
</script>

<style scoped lang="scss">
.docs {
    &__content {
        padding: 24px;
        border-bottom: 1px solid #DDDEE5;
    }

    &__actions {
        padding: 24px;
        display: flex;
        justify-content: flex-end;
    }
}

.docs-main {
    &__content {
        display: flex;
        gap: 50px;
    }

    &__available {
        margin-top: 16px;
    }

    &__select-all {
        margin-bottom: 24px;
    }
}

.categories {
    &__label {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(#1D2452, .6);
    }

    &__content {
        display: flex;
        gap: 48px;
    }

    &__block {
        width: 100%;
    }
}

.category-tile {
    &__title {
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        color: #1D2452;
    }

    &__select-all {
        margin-bottom: 16px;
    }

    &__item {
        padding: 8px 0;

        &:not(:last-of-type) {
            border-bottom: 1px solid rgba(29, 36, 82, 0.1);
        }
    }
}
</style>