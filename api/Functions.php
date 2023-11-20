<?php

namespace Services;

class Functions
{
    public static function fibonacci(int $length): array
    {
        if ($length < 1) {
            return [];
        }

        if ($length === 1) {
            return [0];
        }

        $result = [0, 1];
        for ($i = 0; $i < ($length - 2); $i++) {
            $current = $result[$i] + $result[$i + 1];
            $result[] = $current;
        }
        return $result;
    }
}
