<?php

use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model backend\models\VaiTro */
?>
<div class="vai-tro-view">

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'name',
        ],
    ]) ?>

</div>
