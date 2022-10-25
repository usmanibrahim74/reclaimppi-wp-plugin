<script setup>
import { reactive, onMounted, ref } from "vue";
import axios from "axios";
import Step from "../components/Step.vue"

let state = reactive({
  step: 1,
});
onMounted(() => {});
</script>

  <template>
  <div class="block relative w-[100vw] -translate-x-1/2 left-1/2 p-2">
    
    <div class="max-w-[900px] mx-auto">
      <div class="mx-auto ">
        <div class="flex items-center mx-auto my-12">
          <Step title="PPI Claim Details" :step="1" :current_step="state.step" />
          <Step title="About You" :step="2" :current_step="state.step" />
          <Step title="Contact Details" :step="3" :current_step="state.step" />
          <Step title="Start Claim" :step="4" :current_step="state.step" is-last-step />
        </div>

        <div class="my-2.5 max-w-[650px] mx-auto p-5 bg-[#FEF9F2]" v-if="state.step == 1">
          <div class="px-6 text-center mt-8">
            <p class="text-black font-medium">
              Please enter your PPI Claim details
            </p>
            <hr class="text-[#EDEDED] my-6" />
          </div>
          
          <div class="">
            <p class="text-[#2B2C36]">
              Were you required to complete a Self-Assessment the year you got
              your PPI refund?
            </p>
            <div class="flex">
              <div class="mr-12">
                <input id="radio1" class="hidden" type="radio" name="year" />
                <label for="radio1" 
                class="before:inline-block before:w-2.5 before:h-2.5 p-1 mr-2.5 bg-clip-content border border-solid-[#bbbbbb] rounded-full"
                 ><span>Yes </span></label>
              </div>
              <div class="swizard__radio__items__item">
                <input id="radio2" type="radio" name="year" />
                <label for="radio2">No</label>
              </div>
            </div>
          </div>
          <div class="swizard__title">
            <p class="swizard__title__p">
              Please provide us with the TOTAL amount you received for your PPI
              refunds in the relevant tax years below
            </p>
          </div>
          <div class="swizard__years">
            <div class="swizard__years__items">
              <p>Apr 2018 - Mar 2019</p>
              <div class="swizard__years__items__item">
                <span class="swizard__years__items__item__left-icon">£</span>
                <input type="text" class="swizard__years__items__item__box" />
                <span class="swizard__years__items__item__right-icon"
                  ><IconInfo
                /></span>
              </div>
            </div>
            <div class="swizard__years__items">
              <p>Apr 2019 - Mar 2020</p>
              <div class="swizard__years__items__item">
                <span class="swizard__years__items__item__left-icon">£</span>
                <input type="text" class="swizard__years__items__item__box" />
                <span class="swizard__years__items__item__right-icon"
                  ><IconInfo
                /></span>
              </div>
            </div>
            <div class="swizard__years__items">
              <p>Apr 2020 - Mar 2021</p>
              <div class="swizard__years__items__item">
                <span class="swizard__years__items__item__left-icon">£</span>
                <input type="text" class="swizard__years__items__item__box" />
                <span class="swizard__years__items__item__right-icon"
                  ><IconInfo
                /></span>
              </div>
            </div>
            <div class="swizard__years__items">
              <p>Apr 2021 - Mar 2022</p>
              <div class="swizard__years__items__item">
                <span class="swizard__years__items__item__left-icon">£</span>
                <input type="text" class="swizard__years__items__item__box" />
                <span class="swizard__years__items__item__right-icon"
                  ><IconInfo
                /></span>
              </div>
            </div>
          </div>
          <div class="swizard__radio">
            <p>
              Were you earning less than £50,000.00 a year at the time you
              received your PPI refund?
            </p>
            <div class="swizard__radio__items">
              <div class="swizard__radio__items__item">
                <input id="amount1" type="radio" name="amount" />
                <label for="amount1">Yes</label>
              </div>
              <div class="swizard__radio__items__item">
                <input id="amount2" type="radio" name="amount" />
                <label for="amount2">No</label>
              </div>
            </div>
          </div>
          <div class="swizard__input">
            <p>National insurance (NI) Number</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
              <span class="swizard__input__item__right-icon"><IconInfo /></span>
            </div>
          </div>
          <div class="swizard__sign__checkbox">
            <input id="agreed" type="checkbox" :value="1" />
            <label for="agreed">Can't remember (Provide it later) </label>
          </div>
          <div class="swizard__submit">
            <button
              type="button"
              class="sbutton sbutton__primary sbutton--active"
              @click="stepForward"
            >
              Continue <span class="sbutton__primary__icon"><IconNext /></span>
            </button>
          </div>
        </div>
        <div class="swizard__step" v-if="state.step == 2">
          <div class="swizard__title">
            <p class="swizard__title__p text-center">
              Please complete your details below to start your claim
            </p>
            <hr class="swizard__title__line" />
          </div>
          <div class="swizard__about">
            <div class="swizard__input swizard__about__item">
              <p>Title</p>
              <div class="swizard__input__item">
                <select class="swizard__input__item__box">
                  <option value="null">Mr</option>
                </select>
                <span class="swizard__input__item__right-icon"
                  ><IconSelect
                /></span>
              </div>
            </div>
            <div class="swizard__input swizard__about__item">
              <p>First Name</p>
              <div class="swizard__input__item">
                <input class="swizard__input__item__box" />
              </div>
            </div>
            <div class="swizard__input swizard__about__item">
              <p>Last Name</p>
              <div class="swizard__input__item">
                <input class="swizard__input__item__box" />
              </div>
            </div>
          </div>
          <p>DOB</p>
          <div class="swizard__about">
            <div class="swizard__input swizard__about__item">
              <div class="swizard__input__item">
                <select class="swizard__input__item__box">
                  <option value="null">Day</option>
                </select>
                <span class="swizard__input__item__right-icon"
                  ><IconSelect
                /></span>
              </div>
            </div>
            <div class="swizard__input swizard__about__item">
              <div class="swizard__input__item">
                <select class="swizard__input__item__box">
                  <option value="null">Month</option>
                </select>
                <span class="swizard__input__item__right-icon"
                  ><IconSelect
                /></span>
              </div>
            </div>
            <div class="swizard__input swizard__about__item">
              <div class="swizard__input__item">
                <select class="swizard__input__item__box">
                  <option value="null">Year</option>
                </select>
                <span class="swizard__input__item__right-icon"
                  ><IconSelect
                /></span>
              </div>
            </div>
          </div>
          <div class="swizard__submit">
            <button
              type="button"
              class="sbutton sbutton__primary sbutton--active"
              @click="stepForward"
            >
              Continue <span class="sbutton__primary__icon"><IconNext /></span>
            </button>
            <button
              type="button"
              @click="stepBack"
              class="sbutton sbutton__back"
            >
              <span class="sbutton__primary__back"><IconPrevious /></span>Back
            </button>
          </div>
        </div>
        <div class="swizard__step" v-if="state.step == 3">
          <div class="swizard__title">
            <p class="swizard__title__p text-center">
              Enter your contact details to claim your tax back
            </p>
            <hr class="swizard__title__line" />
          </div>
          <div class="swizard__input">
            <p>Email</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
            </div>
          </div>
          <div class="swizard__input">
            <p>Phone Number</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
            </div>
          </div>
          <div class="swizard__input">
            <p>Address</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
            </div>
          </div>
          <div class="swizard__input">
            <p>Postcode</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
            </div>
          </div>
          <div class="swizard__sign__checkbox">
            <input id="agreed" type="checkbox" :value="1" />
            <label for="agreed"
              ><small
                >I agree for Reclaim My PPI Tax to contact me with regards to
                any tax rebate purposes.</small
              >
            </label>
          </div>

          <div class="swizard__submit">
            <button
              type="button"
              class="sbutton sbutton__primary sbutton--active"
              @click="stepForward"
            >
              Continue <span class="sbutton__primary__icon"><IconNext /></span>
            </button>
            <button
              type="button"
              @click="stepBack"
              class="sbutton sbutton__back"
            >
              <span class="sbutton__primary__back"><IconPrevious /></span> Back
            </button>
          </div>
        </div>
        <div class="swizard__step" v-if="state.step == 4">
          <div class="swizard__claim swizard__title">
            <h3>Great News!</h3>
            <p class="swizard__claim__congrat">
              <span class="swizard__claim__success">Congratulations, </span> You
              100% meet the criteria
            </p>
            <p class="swizard__claim__time">
              Our customers get money back in 6 Weeks!
            </p>
            <hr class="swizard__title__line" />
          </div>
          <div class="swizard__claim__message">
            <p>
              Signing below agrees you into our
              <span class="swizard__claim__message__terms"
                >terms and conditions</span
              >
              and our NO WIN NO FEE services.
            </p>
          </div>
          <div class="swizard__input">
            <p>Do you have a referral code? (optional)</p>
            <div class="swizard__input__item">
              <input class="swizard__input__item__box" />
            </div>
          </div>
          <div class="swizard__input">
            <p>Please draw your signature below in the green box.</p>
            <div class="swizard__input__item">
              <textarea class="swizard__input__item__box" rows="5"></textarea>
            </div>
          </div>
          <small>Clear Signature</small>
          <div class="swizard__submit">
            <button
              type="button"
              class="sbutton sbutton__primary sbutton--active"
            >
              Start Your Claim
            </button>
            <button
              type="button"
              @click="stepBack"
              class="sbutton sbutton__back"
            >
              <span class="sbutton__primary__back"><IconPrevious /></span> Back
            </button>
          </div>
        </div>
        <div class="swizard__error">
          <ul>
            <li v-for="(error, i) in state.errors" :key="i">{{ error }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <Footer :donations="state.donations" /> -->
  </div>
</template>