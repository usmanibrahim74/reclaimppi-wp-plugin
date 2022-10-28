
import { reactive } from "vue";
const year = { year_1: null, year_2: null,year_3: null, year_4: null}
const name = { title: null, first_name: null,last_name: null}
const dob = { day: null, month: null,year: null}
export default reactive({
    url: "/index.php/ReclaimPPI/lead",
    step: 3,
    showAssesmentModal: false,
    showYearsInfoModal: false,
    showNIModal: false,
    loading: false,
    self_assesment_message:"Unfortunately we can’t proceed with your claim and you will have to contact your accountant to do this for you.",
    ni_message: "NI Number is required to identify your tax information with HMRC. Example JJ123456C",
    years_message: "A rough estimate of amount you've received in pounds (£)",
    errors: [],
    year: Object.keys(year),
    name: Object.keys(name),
    dob: Object.keys(dob),
    steps: [
        {title: "PPI Claim Details", number: 1 },
        {title: "About You", number: 2 },
        {title: "Contact Details", number: 3 },
        {title: "Start Claim", number: 4 },
    ],
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
      // {
      //   email: null,
      //   phone: null,
      //   address: null,
      //   postcode: null,
      //   agree: null,
      // },
      {
        email: 'dyvaj@mailinator.com',
        phone: '03056230514',
        address: 'Nisi reprehenderit ',
        postcode: 'Deserunt non eos di',
        agree: null,
      },
      {
        referal_code: null,
        signature: null,
      },
    ],

  });
