<?php

namespace Services;

use RuntimeException;

abstract class Api
{
    public string $apiName;

    protected string $method = ''; //GET|POST|PUT|DELETE
    public array $requestParams = [];

    protected string $action = ''; //Название метода для выполнения


    public function __construct()
    {
        header("Access-Control-Allow-Orgin: *");
        header("Access-Control-Allow-Methods: *");
        header("Content-Type: application/json");

        $this->requestParams = $_REQUEST;

        //Определение метода запроса
        $this->method = $_SERVER['REQUEST_METHOD'];
    }

    public function run(): string
    {
        //Определение действия для обработки
        $this->action = $this->getAction();
        //Если метод(действие) определен в дочернем классе API
        if (method_exists($this, $this->action)) {
            return $this->{$this->action}();
        } else {
            throw new RuntimeException('Invalid Method', 405);
        }
    }

    protected function response($data, int $status = 500): string
    {
        header("HTTP/1.1 " . $status . " " . $this->requestStatus($status));
        return json_encode($data);
    }

    private function requestStatus(int $code): string
    {
        $status = array(
            200 => 'OK',
            422 => 'Unprocessable Entity',
            500 => 'Internal Server Error',
        );
        return ($status[$code]) ? $status[$code] : $status[500];
    }

    protected function getAction(): ?string
    {
        $method = $this->method;
        switch ($method) {
            case 'GET':
                return 'viewAction';
            default:
                return null;
        }
    }
    abstract protected function viewAction();
}
