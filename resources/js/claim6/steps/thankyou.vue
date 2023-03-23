<template lang="">
    <div>
        <p class="text-3xl font-bold">
            Welcome to Reclaim My PPI Tax, Your Reference Number Is: {{ claim_id }}
        </p>
        <p class="text-lg font-medium">
            You could be entitled to further refunds from HMRC. To check if you
            are eligible, please answer the following two questions:
        </p>

        <template v-if="!submitted">
            <div class="mt-6 mb-4">
                <question
                    text="Have you had to work from home due to Covid-19 (even for 1 day)?"
                />
                <div class="flex my-2">
                    <radio-box
                        name="covid"
                        v-model="form.covid"
                        :value="true"
                        label="Yes"
                    />
                    <radio-box
                        name="covid"
                        v-model="form.covid"
                        :value="false"
                        label="No"
                    />
                </div>

                <HasError field="covid" :errors="[]" />
            </div>

            <div class="mt-6 mb-4">
                <question
                    text="Do you wear a uniform at your current workplace?"
                />
                <div class="flex my-2">
                    <radio-box
                        name="uniform"
                        v-model="form.uniform"
                        :value="true"
                        label="Yes"
                    />
                    <radio-box
                        name="uniform"
                        v-model="form.uniform"
                        :value="false"
                        label="No"
                    />
                </div>

                <HasError field="uniform" :errors="[]" />
            </div>

            <NextButton text="Submit" @click="submit" class="my-8"></NextButton>
        </template>
        <p class="my-8" v-else>
            Thank You! Good luck with both claims and we will be in touch as
            soon as we have any updates.
        </p>

        <p class="font-bold mb-2">What happens next?</p>
        <p>
            One of our agents will be in contact to discuss the next steps of
            the claim. If you have any questions or queries then please contact
            us on the below:
        </p>
        <p class="font-bold mt-3">
            Email:
            <a href="mailto:info@reclaimmyppitax.co.uk"
                >info@reclaimmyppitax.co.uk</a
            >
        </p>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            submitted: false,
            form: {
                claim_id: null,
                covid: false,
                uniform: false,
            },
        };
    },
    props: {
        claim_id:{
            type: String
        },
    },
    methods: {
        async submit() {
            this.form.claim_id=this.claim_id;
            const response = await axios.post("/ReclaimPPI/thanks", this.form);
            this.submitted = true;
        },
    },
};
</script>
<style lang=""></style>
