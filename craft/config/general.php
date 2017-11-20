<?php
return array(
    '*' => array(
        'defaultImageQuality' => 90,
				'allowAutoUpdates' => false,
				'enableCsrfProtection' => true,
				'loginPath' => '/admin/login',
        'omitScriptNameInUrls' => true,
        'environmentVariables' => array(
            'env' => 'production',
            'siteUrl' => (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['SERVER_NAME']
        )
    ),
    '.dev' => array(
        'allowAutoUpdates' => true,
        // 'devMode' => true,
        'enableTemplateCaching' => false,
        'environmentVariables' => array(
            'env' => 'local'
        )
    )
);