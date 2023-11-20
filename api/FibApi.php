<?php

namespace Services;

class FibApi extends Api
{
    public string $apiName = 'fib';

    // GET api/?length={number}
    public function viewAction(): string
    {
        $length = $this->requestParams["length"];
        $data = Functions::fibonacci($length);

        if (!$data) {
            return $this->response('invalid data', 422);
        }
        return $this->response($data, 200);
    }
}
