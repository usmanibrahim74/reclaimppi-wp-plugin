
import { reactive } from "vue";
const year = { year_1: null, year_2: null,year_3: null, year_4: null}
const name = { title: null, first_name: null,last_name: null}
const dob = { day: null, month: null,year: null}
export default reactive({
    url: "/index.php/ReclaimPPI/lead",
    step: 1,
    showAssesmentModal: false,
    showYearsInfoModal: false,
    showNIModal: false,
    self_assesment_message:"Unfortunately we can’t proceed with your claim and you will have to contact your accountant to do this for you.",
    errors: [],
    year: Object.keys(year),
    name: Object.keys(name),
    dob: Object.keys(dob),
    required: [
      ["self_assesment", "year", "less_earning", "ni_number"],
      ["name", "dob"],
      ["email", "phone", "address", "postcode", "agree", "signature"],
    ],
    form: [
      {
        self_assesment: null,
        ...year,
        less_earning: null,
        ni_number: null,
        cant_remember: null,
      },
      {
        ...name,
        ...dob,
      },
      {
        email: null,
        phone: null,
        address: null,
        postcode: null,
        agree: null,
      },
      {
        referal_code: null,
        signature: null,
      },
    ],

  });
