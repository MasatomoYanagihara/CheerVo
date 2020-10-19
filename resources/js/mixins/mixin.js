import moment from "moment";

export default {
    filters: {
        moment: function(date) {
            return moment(date).format("YYYY/MM/DD HH:mm");
        }
    }
};
