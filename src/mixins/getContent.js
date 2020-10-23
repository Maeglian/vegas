import axios from 'axios';
import Loader from '@/components/Loader.vue';
import { mapState } from 'vuex';

export default {
  props: {
    url: {
      type: String,
    },
  },
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      pageContent: '',
    };
  },
  computed: {
    ...mapState(['userCountry']),
  },
  created() {
    this.getContent();
  },
  methods: {
    async getContent() {
      this.isLoading = true;
      try {
        const res = await axios.get(`${this.url}&lang=${this.userCountry}`);
        this.pageContent = res.data;
      } catch (e) {
        this.isErrored = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
