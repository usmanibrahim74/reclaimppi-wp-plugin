<!-- <style lang="scss" scoped>
  @import "./assets/main.scss";
  </style> -->
  <script setup>
  import { reactive, onMounted, ref } from "vue";
  // import countries from "./data/countries.json";
  import IconInfo from "./../icons/IconInfo.vue";
  import IconNext from "./../icons/IconNext.vue";
  import IconPrevious from "./../icons/IconPrevious.vue";
  import IconSelect from "./../icons/IconSelect.vue";
  import HasError from "./../components/HasError.vue"
  
  // import { current_donation, form } from "./data/resets";
  
  let state = reactive({
    step: 2,
    errors: [],
    required: [
      ['self_assesment', 'year', 'less_earning', 'ni_number'],
      ['name','dob'],
      []
    ],
    form: [
      {
        self_assesment: null,
        year_2019: null,
        year_2020: null,
        year_2021: null,
        year_2022: null,
        less_earning: null,
        ni_number: null,
        cant_remember: null,
      },{
        title: null,
        first_name: null,
        last_name: null,
        day: null,
        month: null,
        year: null,
      }
    ]
  });
  onMounted(() => {});
  
  function validate(){
    const required = Object.values(state.required[state.step-1]);
    const form = state.form[state.step-1];
    if(required.includes('ni_number') && form.cant_remember){
      required.splice(required.indexOf('ni_number'),1)
    }
    const empty_keys = Object.keys(Object.fromEntries(Object.entries(form).filter(([_, v]) => v == null || v == "")))
    let errors = empty_keys.filter(f => required.includes(f));
    if(["year_2019","year_2020","year_2021","year_2022"].every(k => empty_keys.includes(k))){
      errors.push('year');
    }
    if(state.step == 2){
      console.log(empty_keys);
      if(["title","first_name","last_name"].some(k => empty_keys.includes(k))){
        errors.push('name');
      }
      if(["day","month","year"].some(k => empty_keys.includes(k))){
        errors.push('dob');
      }
    }
    state.errors = [ ...errors ];
    return !state.errors.length
  }
  function stepForward() {
    if(validate()){
      if (state.step >= 1 && state.step <= 4) {
        state.step++;
      }
    }
    
  }
  function stepBack() {
    if (state.step >= 1 && state.step <= 4) state.step--;
  }
  </script>
  
  <template>
    <div class="smodal">
      <div class="smodal__body">
        <div class="swizard">
          <div class="sprogress-bar">
            <div
              class="sprogress-bar__step"
              :class="{
                'sprogress-bar__step--complete': state.step >= 2,
                'sprogress-bar__step--active': state.step > 0,
              }"
            >
              <p
                class="sprogress-bar__step__text"
                :class="{ 'sprogress-bar__step__text--active': state.step > 0 }"
              >
                PPI Claim Details
              </p>
              <div class="sprogress-bar__step-number">1</div>
            </div>
            <div
              class="sprogress-bar__step"
              :class="{
                'sprogress-bar__step--complete': state.step >= 3,
                'sprogress-bar__step--active': state.step >= 2,
              }"
            >
              <p
                class="sprogress-bar__step__text"
                :class="{ 'sprogress-bar__step__text--active': state.step >= 2 }"
              >
                About You
              </p>
              <div class="sprogress-bar__step-number">2</div>
            </div>
            <div
              class="sprogress-bar__step"
              :class="{
                'sprogress-bar__step--complete': state.step >= 4,
                'sprogress-bar__step--active': state.step >= 3,
              }"
            >
              <p
                class="sprogress-bar__step__text"
                :class="{ 'sprogress-bar__step__text--active': state.step >= 3 }"
              >
                Contact Details
              </p>
              <div class="sprogress-bar__step-number">3</div>
            </div>
            <div
              class="sprogress-bar__step"
              :class="{
                'sprogress-bar__step--complete': state.step > 4,
                'sprogress-bar__step--active': state.step >= 4,
              }"
            >
              <p
                class="sprogress-bar__step__text"
                :class="{ 'sprogress-bar__step__text--active': state.step >= 4 }"
              >
                Start Claim
              </p>
              <div class="sprogress-bar__step-number">4</div>
            </div>
          </div>
          <div class="swizard__step" v-if="state.step == 1">
            <div class="swizard__title">
              <p class="swizard__title__p text-center">
                Please enter your PPI Claim details
              </p>
              <hr class="swizard__title__line" />
            </div>
            <div class="swizard__radio">
              <p>
                Were you required to complete a Self-Assessment the year you got
                your PPI refund?
              </p>
              <div class="swizard__radio__items">
                <div class="swizard__radio__items__item">
                  <input id="self_assesment_yes" type="radio" v-model="state.form[0].self_assesment" name="self_assesment" :value="true" />
                  <label for="self_assesment_yes"><span>Yes </span></label>
                </div>
                <div class="swizard__radio__items__item">
                  <input id="self_assesment_no" type="radio" v-model="state.form[0].self_assesment" name="self_assesment" :value="false" />
                  <label for="self_assesment_no">No</label>
                </div>
              </div>
              <HasError field="self_assesment" :errors="state.errors" />
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
                  <input type="number" v-model="state.form[0].year_2019" class="swizard__years__items__item__box hide-arrows" />
                  <span class="swizard__years__items__item__right-icon"
                    ><IconInfo
                  /></span>
                </div>
              </div>
              <div class="swizard__years__items">
                <p>Apr 2019 - Mar 2020</p>
                <div class="swizard__years__items__item">
                  <span class="swizard__years__items__item__left-icon">£</span>
                  <input type="number" v-model="state.form[0].year_2020" class="swizard__years__items__item__box hide-arrows" />
                  <span class="swizard__years__items__item__right-icon"
                    ><IconInfo
                  /></span>
                </div>
              </div>
              <div class="swizard__years__items">
                <p>Apr 2020 - Mar 2021</p>
                <div class="swizard__years__items__item">
                  <span class="swizard__years__items__item__left-icon">£</span>
                  <input type="number" v-model="state.form[0].year_2021" class="swizard__years__items__item__box hide-arrows" />
                  <span class="swizard__years__items__item__right-icon"
                    ><IconInfo
                  /></span>
                </div>
              </div>
              <div class="swizard__years__items">
                <p>Apr 2021 - Mar 2022</p>
                <div class="swizard__years__items__item">
                  <span class="swizard__years__items__item__left-icon">£</span>
                  <input type="number" v-model="state.form[0].year_2022" class="swizard__years__items__item__box hide-arrows" />
                  <span class="swizard__years__items__item__right-icon"
                    ><IconInfo
                  /></span>
                </div>
              </div>

              <HasError field="year" :errors="state.errors" message="Please fill at least one record" />
            </div>
            <div class="swizard__radio">
              <p>
                Were you earning less than £50,000.00 a year at the time you
                received your PPI refund?
              </p>
              <div class="swizard__radio__items">
                <div class="swizard__radio__items__item">
                  <input id="less_earning" type="radio" name="less_earning" :value="true" v-model="state.form[0].less_earning"  />
                  <label for="less_earning">Yes</label>
                </div>
                <div class="swizard__radio__items__item">
                  <input id="more_earning" type="radio" name="less_earning" :value="false" v-model="state.form[0].less_earning" />
                  <label for="more_earning">No</label>
                </div>
              </div>
              <HasError field="less_earning" :errors="state.errors" />

            </div>
            <div class="swizard__input">
              <p>National insurance (NI) Number</p>
              <div class="swizard__input__item">
                <input type="text" v-model="state.form[0].ni_number" class="swizard__input__item__box" />
                <span class="swizard__input__item__right-icon"><IconInfo /></span>
              </div>
            </div>
            <div class="swizard__sign__checkbox">
              <input
                id="cant_remember"
                type="checkbox"
                :value="true"
                v-model="state.form[0].cant_remember"
              />
              <label for="cant_remember">Can't remember (Provide it later) </label>
            </div>
            <HasError field="ni_number" :errors="state.errors" />

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
                  <select v-model="state.form[1].title" class="swizard__input__item__box">
                    <option :value="null">Select</option>
                    <option value="Nr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                  <span class="swizard__input__item__right-icon"
                    ><IconSelect
                  /></span>
                </div>

              </div>
              <div class="swizard__input swizard__about__item">
                <p>First Name</p>
                <div class="swizard__input__item">
                  <input v-model="state.form[1].first_name" class="swizard__input__item__box" />
                </div>
              </div>
              <div class="swizard__input swizard__about__item">
                <p>Last Name</p>
                <div class="swizard__input__item">
                  <input v-model="state.form[1].last_name" class="swizard__input__item__box" />
                </div>
              </div>
            </div>
            <HasError field="name" :errors="state.errors" message="The above fields are required" />

            <p>DOB</p>
            <div class="swizard__about">
              <div class="swizard__input swizard__about__item">
                <div class="swizard__input__item">
                  <select v-model="state.form[1].day" class="swizard__input__item__box">
                    <option :value="null">Day</option>
                    <option :value="v" :key="v" v-for="v in 31">{{ v }}</option>

                  </select>
                  <span class="swizard__input__item__right-icon"
                    ><IconSelect
                  /></span>
                </div>
              </div>
              <div class="swizard__input swizard__about__item">
                <div class="swizard__input__item">
                  <select v-model="state.form[1].month" class="swizard__input__item__box">
                    <option :value="null">Month</option>
                    <option :value="v" :key="v" v-for="v in 12">{{ v }}</option>
                  </select>
                  <span class="swizard__input__item__right-icon"
                    ><IconSelect
                  /></span>
                </div>
              </div>
              <div class="swizard__input swizard__about__item">
                <div class="swizard__input__item">
                  <select v-model="state.form[1].year" class="swizard__input__item__box">
                    <option :value="null">Year</option>
                    <option :value="v" :key="v" v-for="v in 101">{{ new Date().getFullYear() - v + 1 }}</option>

                  </select>
                  <span class="swizard__input__item__right-icon"
                    ><IconSelect
                  /></span>
                </div>
              </div>
            </div>
            <HasError field="dob" :errors="state.errors" message="The above fields are required" />

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
              <input
                id="agreed"
                type="checkbox"
                :value="1"
              />
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
          
        </div>
      </div>
      <!-- <Footer :donations="state.donations" /> -->
    </div>
  </template>