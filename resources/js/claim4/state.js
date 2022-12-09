
import { reactive } from "vue";
import {years, name, dob} from "./options.json";
export default reactive({
    url: "/ReclaimPPI/lead",
    step: 1,
    loading: false,
    steps: [
        {title: "PPI Claim Details", number: 1 },
        {title: "About You", number: 2 },
        {title: "Contact Details", number: 3 },
        {title: "Start Claim", number: 4 },
    ],
    form: [
      {
        self_assessment: null,
        ...years,
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
        referral_code: null,
        signature: null,
      },
    ],

  });
