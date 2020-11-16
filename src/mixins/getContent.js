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
  watch: {
    activeLanguage: {
      immediate: true,
      handler() {
        this.getContent();
      },
    },
  },
  computed: {
    ...mapState(['activeLanguage']),
  },
  methods: {
    async getContent() {
      this.isLoading = true;
      try {
        const res = await axios.get(`${this.url}&lang=${this.activeLanguage.code}`);
        this.pageContent = res.data;
      } catch (e) {
        this.isErrored = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
