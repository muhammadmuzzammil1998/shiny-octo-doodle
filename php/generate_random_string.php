<?php

//https://stackoverflow.com/a/27321922/3863437

function generate_random_string($length, $spChars = false)
{
    $alpha = 'abcdefghijklmnopqrstwvxyz';
    $alphaUp = strtoupper($alpha);
    $num = '12345678901234567890';
    $sp = '@/+.*-\$#!)[';
    $thread = $alpha . $alphaUp . $num;
    if ($spChars) {
        $thread .= $sp;
    }

    $str = '';
    for ($i = 0; $i < $length; $i++) {
        $str .= $thread[mt_rand(0, strlen($thread) - 1)];
    }
    return $str;
}
