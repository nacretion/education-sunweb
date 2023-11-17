<?php
    require_once 'Api.php';
    require_once 'functions.php';

    class FibApi extends Api {

        public $apiName = 'fib';

        public function indexAction()
        {
            return $this->response("indexAction", 200);
        }

        // GET api/?length={number}
        public function viewAction()
        {
            $length = $this->requestParams["length"];

            return $this->response(fibonacci($length), 200);
        }

        // POST api/ with raw json = { "length":number }
        public function createAction()
        {
            $length = $this->requestBody["length"];

            return $this->response(fibonacci($length), 200);
        }

    }